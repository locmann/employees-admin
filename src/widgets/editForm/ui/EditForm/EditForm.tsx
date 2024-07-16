import { Employee } from 'entities/employees';
import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Position,
  PositionToRuPositionMap,
  RuPosition,
  RuPositionToPositionMap,
} from 'entities/filters';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles.module.scss';
import InputMask from 'react-input-mask';
import { useUpdateEmployeeMutation } from 'entities/employees/api/employeesApi.ts';
import { formatDate, formatDateToHtml } from 'shared/helpers/formatDate.ts';
import { useNavigate } from 'react-router-dom';
import { schema } from 'shared/helpers/schemaYup.ts';

type Props = {
  employee: Employee;
};

type Inputs = {
  name: string;
  role: RuPosition;
  phone: string;
  birthday: string;
  isArchive: boolean;
};

const EditForm: FC<Props> = ({ employee }) => {
  const [updateEmployee] = useUpdateEmployeeMutation();
  const navigate = useNavigate();
  const defaultValues = {
    birthday: formatDateToHtml(employee.birthday),
    isArchive: employee.isArchive,
    name: employee.name,
    role: PositionToRuPositionMap[employee.role as Position],
    phone: employee.phone,
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const requestData = {
      id: employee.id,
      isArchive: data.isArchive,
      birthday: formatDate(data.birthday),
      phone: data.phone,
      role: RuPositionToPositionMap[data.role],
      name: data.name,
    };
    updateEmployee(requestData);
  };

  return (
    <>
      <button onClick={() => navigate(-1)}>Back</button>
      <form
        className={styles.wrapper}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <div>
              <label>First Name</label>
              <input
                {...field}
                type="text"
              />
              {errors.name && <span>{errors.name.message}</span>}
            </div>
          )}
        />
        <Controller
          name="role"
          control={control}
          render={({ field }) => (
            <div>
              <label>Role</label>
              <select {...field}>
                {Object.values(RuPosition).map((position) => (
                  <option
                    key={position}
                    value={position}
                  >
                    {position}
                  </option>
                ))}
              </select>
              {errors.role && <span>{errors.role.message}</span>}
            </div>
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <div>
              <label>Phone Number</label>
              <InputMask
                mask="+7 (999) 999-9999"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              >
                {
                  ((inputProps: InputHTMLAttributes<HTMLInputElement>) => (
                    <input
                      {...inputProps}
                      type="text"
                    />
                  )) as unknown as ReactNode
                }
              </InputMask>
              {errors.phone && <span>{errors.phone.message}</span>}
            </div>
          )}
        />
        <Controller
          name="birthday"
          control={control}
          render={({ field }) => (
            <div>
              <label>Birth Date</label>
              <input
                {...field}
                type="date"
              />
              {errors.birthday && <span>{errors.birthday.message}</span>}
            </div>
          )}
        />
        <Controller
          name="isArchive"
          control={control}
          render={({ field }) => (
            <div>
              <label>в архиве</label>
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              {errors.isArchive && <span>{errors.isArchive.message}</span>}
            </div>
          )}
        />
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default EditForm;
