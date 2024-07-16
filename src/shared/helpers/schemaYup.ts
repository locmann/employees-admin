import * as yup from 'yup';
import { RuPosition } from 'entities/filters';

export const schema = yup.object().shape({
  name: yup.string().required('name is required'),
  role: yup
    .mixed<RuPosition>()
    .oneOf(Object.values(RuPosition), 'Invalid role')
    .required('Role is required'),
  birthday: yup.string().required('Birth date is required'),
  phone: yup
    .string()
    .matches(/^\+7 \(\d{3}\) \d{3}-\d{4}$/, 'Phone number must be in the format +7 (***) ***-****')
    .required('Phone number is required'),
  isArchive: yup.boolean().required('Status is required'),
});
