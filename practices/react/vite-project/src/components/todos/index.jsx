import { useEffect, useState } from 'react';
import ToDo from './ToDo';

/**
 * Funcion encargada de realizar
 * la peticion hacia el backend
 * para extraer el resultado de la
 * lista de tareas
 */
async function getToDos() {
  /**
   * La url donde extraigo
   * la informacion es conocido
   * como endpoint
  */
  const url = 'http://localhost:4040/api/v1/to-do';
  /**
   * Por defecto 'fetch' realiza
   * peticiones por verbo GET
   */
  const response = await fetch(url, {
    method: 'GET',
  });

  const json = await response.json();

  // console.log(json);

  return json.result;
}

function ToDos() {
  /**
     * Cada vez que se ejecuta un setState
     * o un cambio de estado, se vuelve a
     * ejecutar la funcion completa del componente
     */
  const [todos, setTodos] = useState([]);

  /**
   * Al usar un useEffect con el segundo
   * parametro un array vacio, quiere decir
   * que no dependera de nada la callback
   * que se haya pasado por primer parametro
   * y solo sera ejecutada cuando recien
   * se crea este componente
   */
  useEffect(() => {
    getToDos().then((data) => {
      console.log('Peticion realizada');
      setTodos(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div>
      Lista de Tareas
      <ul>
        {todos.map((todo) => (
          <li>
            <ToDo title={todo.title} text={todo.text} priority={todo.priority} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDos;
