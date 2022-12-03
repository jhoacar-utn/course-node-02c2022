import { Suspense } from 'react';
import Spinner from './components/Spinner';
import Router from './routes';

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Router />
    </Suspense>
  );
}

export default App;
