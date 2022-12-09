/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';

import router from './routes';

function App() {
  return (
    <Suspense fallback={<h1>Cargando</h1>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
