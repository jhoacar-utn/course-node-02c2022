import { useEffect, useState } from 'react';
import ToDo from './ToDo';

async function getToDos() {
  const url = 'http://localhost:4040/api/v1/to-do';

  const response = await fetch(url);

  const json = await response.json();

  return json.result;
}

function ToDos() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    getToDos().then((data) => {
      setTodos(data);
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  if (todos === null) {
    return (
      <div>
        Cargando lista de tareas
      </div>
    );
  }

  return (
    <div>
      Lista De Tareas
      <ul>
        {todos?.map((todo) => (
          <li>
            <ToDo title={todo.title} text={todo.text} priority={todo.priority} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDos;
