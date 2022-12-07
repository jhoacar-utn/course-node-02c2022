import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/templates/mainLayout';

const Home = lazy(() => import('../components/pages/home'));
const NotFound = lazy(() => import('../components/pages/notfound'));
const Emoji = lazy(() => import('../components/pages/emoji'));
const Emojis = lazy(() => import('../components/pages/emojis'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: 'emojis',
    element: (
      <Layout>
        <Emojis />
      </Layout>
    ),
  },
  {
    path: 'emojis/:id',
    element: (
      <Layout>
        <Emoji />
      </Layout>
    ),
  },

  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
