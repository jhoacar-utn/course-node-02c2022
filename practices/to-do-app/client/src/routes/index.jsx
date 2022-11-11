import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'todos',
    element: <ToDos />,
  },
  {
    path: 'todos/:toDoId',
    element: <ToDo />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
