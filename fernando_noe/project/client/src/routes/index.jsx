/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Home = lazy(() => import('../components/pages/home'));
const Emoji = lazy(() => import('../components/pages/emoji'));
const Emojis = lazy(() => import('../components/pages/emojis'));
const NotFound = lazy(() => import('../components/pages/notfound'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'emojis',
    element: <Emojis />,
  },
  {
    path: 'emojis/:id',
    element: <Emoji />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
