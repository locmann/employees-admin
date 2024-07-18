import { selectEmployee } from 'entities/employees/model/employeesSlice.ts';
import { EmployeeCard } from 'entities/employees';
import { useAppSelector } from 'app/store.ts';
import {
  selectDateSortMode,
  selectFilterPosition,
  selectFilterStatus,
  selectNameSortMode,
} from 'entities/filters/model/filtersSlice.ts';
import { renderList } from 'shared/helpers/renderList.ts';

const EmployeesList = () => {
  const employees = useAppSelector(selectEmployee);
  const position = useAppSelector(selectFilterPosition);
  const isArchive = useAppSelector(selectFilterStatus);
  const nameSortMode = useAppSelector(selectNameSortMode);
  const dateSortMode = useAppSelector(selectDateSortMode);

  return (
    <>
      {renderList(employees, position, isArchive, nameSortMode, dateSortMode).map((employee) => (
        <EmployeeCard
          item={employee}
          key={employee.id}
        />
      ))}
    </>
  );
};

export default EmployeesList;
