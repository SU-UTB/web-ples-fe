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
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          error: {
            className: 'bg-red-600 text-red-50 px-5 py-2.5 text-xl ',
          },
          success: {
            className: 'bg-green-600 text-green-50 px-5 py-2.5 text-xl ',
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
