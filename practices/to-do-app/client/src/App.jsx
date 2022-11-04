import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notfound';
import ToDo from './pages/todo';
import ToDos from './pages/todos';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'todos',
      element: <ToDos />,
    },
    {
      path: 'todos/:id',
      element: <ToDo />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
