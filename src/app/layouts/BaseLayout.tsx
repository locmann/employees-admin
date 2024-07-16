import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default BaseLayout;
