import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AuthorizeToken from '../components/atoms/AuthorizeToken';
import Layout from '../components/templates/mainLayout';
/**
 * Uso de lazy loading (carga perezosa)
 *
 * El lazy loading es la sectorizacion de archivos
 * para una carga independiente en las vistas,
 * esto quiere decir, que no le mandaremos al
 * usuario todo el contenido, sino solo aquellas
 * partes que el requiera
 *
 * Para hacerlo se hace uso de la funcion lazy()
 * y el componente <Suspense>, esto funciona de la
 * siguiente manera:
 *
 *  - La funcion lazy() recibe como primer parametro,
 *    una callback con que resolvera la promesa con la
 *    importacion del recurso
 *
 *  - El componente <Suspense /> es el encargado
 *    de procesar todas estas importaciones dinamicas
 *    habilitando una 'fallback' que es un componente
 *    que sera mostrado mientras se esta cargado dicho
 *    recurso
 */
// import Home from '../components/pages/home';
// import NotFound from '../components/pages/notfound';
// import ToDo from '../components/pages/todo';
// import ToDos from '../components/pages/todos';
const Home = lazy(() => import('../components/pages/home'));
const NotFound = lazy(() => import('../components/pages/notfound'));
const ToDo = lazy(() => import('../components/pages/todo'));
const ToDos = lazy(() => import('../components/pages/todos'));
const Register = lazy(() => import('../components/pages/register'));
const Login = lazy(() => import('../components/pages/login'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Home /></Layout>,
  },
  {
    path: 'todos',
    element: (
      <Layout>
        <AuthorizeToken>
          <ToDos />
        </AuthorizeToken>
      </Layout>
    ),
  },
  {
    path: 'todos/:toDoId',
    element: (
      <Layout>
        <AuthorizeToken>
          <ToDo />
        </AuthorizeToken>
      </Layout>
    ),
  },
  {
    path: 'register',
    element: <Layout><Register /></Layout>,
  },
  {
    path: 'login',
    element: <Layout><Login /></Layout>,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
