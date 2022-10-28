import { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const Emoji = lazy(() => import('../pages/emoji'));
const Error = lazy(() => import('../pages/errors'));

function Router() {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to="/emojis" />,
    },
    {
      path: '/emojis',
      element: <Home />,
    },
    {
      path: '/emojis/:id',
      element: <Emoji />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return element;
}

export default Router;
