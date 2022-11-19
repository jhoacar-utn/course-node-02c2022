import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Spinner from './components/atoms/Spinner';
import router from './routes';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
      <Toaster />
    </Suspense>
  );
}

export default App;
