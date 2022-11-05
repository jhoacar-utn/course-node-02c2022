import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/pages/home';
import NotFound from '../components/pages/notfound';
import ToDo from '../components/pages/todo';
import ToDos from '../components/pages/todos';

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

export default router;
