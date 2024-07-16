import { useGetEmployeesQuery } from 'entities/employees/api/employeesApi.ts';
import { useEffect } from 'react';
import { useAppDispatch } from 'app/store.ts';
import { loadEmployees } from 'entities/employees/model/employeesSlice.ts';
import { EmployeesList } from 'widgets/employees';
import { Header } from 'widgets/header/ui';

const MainPage = () => {
  const { data, isFetching } = useGetEmployeesQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(loadEmployees(data));
    }
  }, [data]);

  return (
    <div>
      <Header />
      {isFetching && <p>Loading...</p>}
      <EmployeesList />
    </div>
  );
};

export default MainPage;
