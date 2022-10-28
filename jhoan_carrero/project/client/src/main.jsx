import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import Spinner from './components/Spinner';

const LazyApp = lazy(() => import('./App'));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <LazyApp />
        <Toaster position="bottom-right" />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
);
