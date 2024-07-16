import { selectEmployee } from 'entities/employees/model/employeesSlice.ts';
import { EmployeeCard } from 'entities/employees';
import { useAppSelector } from 'app/store.ts';
import { selectFilterPosition, selectFilterStatus } from 'entities/filters/model/filtersSlice.ts';
import { Position } from 'entities/filters';

const EmployeesList = () => {
  const employees = useAppSelector(selectEmployee);
  const position = useAppSelector(selectFilterPosition);
  const isArchive = useAppSelector(selectFilterStatus);

  return (
    <>
      {employees
        .filter((employee) => {
          return position === Position.Empty || employee.role === position;
        })
        .filter((employee) => {
          if (isArchive) {
            return employee.isArchive;
          } else {
            return true;
          }
        })
        .map((employee) => (
          <EmployeeCard
            item={employee}
            key={employee.id}
          />
        ))}
    </>
  );
};

export default EmployeesList;
