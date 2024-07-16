import { EditForm } from 'widgets/editForm';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'app/store.ts';
import { selectEmployee } from 'entities/employees/model/employeesSlice.ts';

const FormPage = () => {
  const { employeeId } = useParams();

  const employee = useAppSelector(selectEmployee);

  const currentEmployee = employee.find((el) => el.id === Number(employeeId));

  return <>{currentEmployee && <EditForm employee={currentEmployee} />}</>;
};

export default FormPage;
