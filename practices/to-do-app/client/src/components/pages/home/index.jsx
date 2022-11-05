import { Navigate } from 'react-router-dom';

function Home() {
  return (
    <Navigate to="/todos" />
  );
}

export default Home;
