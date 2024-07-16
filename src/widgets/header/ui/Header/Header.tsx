import { EmployeeFilters } from 'widgets/filters';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/addEmployee')}>Добавить</button>
      <EmployeeFilters />
    </>
  );
};

export default Header;
