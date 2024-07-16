import { Employee } from 'entities/employees/model/types.ts';
import { FC } from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import { Position, PositionToRuPositionMap } from 'entities/filters';
import { useDeleteEmployeeMutation } from 'entities/employees/api/employeesApi.ts';

type Props = {
  item: Employee;
};

const EmployeeCard: FC<Props> = ({ item }) => {
  const [deleteEmployee] = useDeleteEmployeeMutation();

  return (
    <div className={styles.cardWrapper}>
      <p>{item.name}</p>
      <p>{PositionToRuPositionMap[item.role as Position]}</p>
      <p>{item.phone}</p>
      <NavLink to={`/${item.id}`}>Редактирование</NavLink>
      <button onClick={() => deleteEmployee(item)}>Удалить</button>
    </div>
  );
};

export default EmployeeCard;
