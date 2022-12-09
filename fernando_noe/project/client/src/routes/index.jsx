import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

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
    path: 'emojis/:emojiId',
    element: <Emoji />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
