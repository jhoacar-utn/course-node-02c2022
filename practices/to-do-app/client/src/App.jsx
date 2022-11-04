import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          <h1>ToDo App</h1>
          <a href="/about">About Us</a>
        </div>
      ),
    },
    {
      path: 'about',
      element: <div>About</div>,
    },
    {
      path: '*',
      element: <div>Not Found</div>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
