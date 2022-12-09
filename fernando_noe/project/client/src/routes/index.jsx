/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home';
import Emoji from '../pages/emoji';
import Emojis from '../pages/emojis';
import NotFound from '../pages/notfound';

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
