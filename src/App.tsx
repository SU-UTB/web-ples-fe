import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomePage,
  ReservationsAdministrationPage,
  ReservationsViewPage,
} from './components/pages';
import './styles/index.css';

// Import your custom cursor images
// import frCursor from './assets/img/eastereggs/frCursor.png';
// import pointerCursor from './assets/img/eastereggs/pointerCursor.png';

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

/*   useEffect(() => {
    // Set the default cursor for the body
    document.body.style.cursor = `url(${frCursor}) 0 0, auto`;

    // Apply the pointer cursor for clickable elements
    const style = document.createElement('style');
    style.textContent = `
      button, a, [role="button"] {
        cursor: url(${pointerCursor}) 0 0, pointer;
      }
    `;
    document.head.appendChild(style);

    // Cleanup on unmount
    return () => {
      document.body.style.cursor = 'default';
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []); */

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
