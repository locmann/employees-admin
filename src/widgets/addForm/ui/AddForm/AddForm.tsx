import { RuPosition, RuPositionToPositionMap } from 'entities/filters';
import { useNavigate } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from 'widgets/editForm/ui/EditForm/styles.module.scss';
import InputMask from 'react-input-mask';
import { InputHTMLAttributes, ReactNode } from 'react';
import { schema } from 'shared/helpers/schemaYup.ts';
import { useCreateEmployeeMutation } from 'entities/employees/api/employeesApi.ts';
import { useAppSelector } from 'app/store.ts';
import { selectEmployee } from 'entities/employees/model/employeesSlice.ts';
import { formatDate } from 'shared/helpers/formatDate.ts';

type Inputs = {
  name: string;
  role: RuPosition;
  phone: string;
  birthday: string;
  isArchive: boolean;
};

const AddForm = () => {
  const navigate = useNavigate();
  const [createEmployee] = useCreateEmployeeMutation();

  const employees = useAppSelector(selectEmployee);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const requestData = {
      id: employees[employees.length - 1].id + 1,
      isArchive: !!data.isArchive,
      birthday: formatDate(data.birthday),
      phone: data.phone,
      role: RuPositionToPositionMap[data.role],
      name: data.name,
    };

    createEmployee(requestData);
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

export default AddForm;
