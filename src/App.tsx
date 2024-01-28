import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  ReservationsAdministrationPage,
  ReservationsViewPage,
} from './components/pages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/rezervace',
      element: <ReservationsViewPage />,
    },
    {
      path: '/rezervace/administrace',
      element: <ReservationsAdministrationPage />,
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
