import * as yup from 'yup';
import { RuPosition } from 'entities/filters';

export const schema = yup.object().shape({
  name: yup.string().required('name is required'),
  role: yup
    .mixed<RuPosition>()
    .oneOf(Object.values(RuPosition), 'Invalid role')
    .required('Role is required'),
  birthday: yup
    .string()
    .required('Birth date is required')
    .test(
      'is-valid-date',
      'Birth date must be in the format dd.mm.yyyy and be a valid date',
      function (value) {
        const { isValid, message } = checkDate(value);
        return isValid ? true : this.createError({ message });
      },
    ),
  phone: yup
    .string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{4}$/, 'Phone number must be in the format +7 (***) ***-****')
    .required('Phone number is required'),
  isArchive: yup.boolean().required('Status is required'),
});

function checkDate(dateString: string) {
  const [year, month, day] = dateString.split('-').map(Number);
  console.log(dateString);
  console.log(year, month, day);
  if (!day || !month || !year) {
    return { isValid: false, message: 'Date components are missing' };
  }

  if (year < 1900 || year > 9999) {
    return { isValid: false, message: 'Year must be between 1000 and 9999' };
  }

  const date = new Date(year, month - 1, day);
  console.log(date.valueOf(), new Date().valueOf());
  if (date.valueOf() > new Date().valueOf()) {
    return { isValid: false, message: 'Date cannot be in the future' };
  }

  if (date.getDate() !== day || date.getMonth() + 1 !== month || date.getFullYear() !== year) {
    return { isValid: false, message: 'Invalid date' };
  }

  return { isValid: true };
}
