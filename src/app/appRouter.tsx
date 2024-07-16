import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout.tsx';
import MainPage from 'pages/main/ui/Page.tsx';
import FormPage from 'pages/form/ui/Page.tsx';
import AddPage from 'pages/addForm/ui/Page.tsx';

export const appRouter = createBrowserRouter([
  {
    element: <BaseLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/:employeeId',
        element: <FormPage />,
      },
      {
        path: '/addEmployee',
        element: <AddPage />,
      },
    ],
  },
]);
