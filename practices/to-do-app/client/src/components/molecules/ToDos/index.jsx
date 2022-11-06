import { useEffect, useState } from 'react';
import ToDo from '../../atoms/ToDo';

async function getToDos(start, limit) {
  const url = `http://localhost:4040/api/v1/to-do?start=${start || 0}&limit=${limit || 10}`;

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
    <ul>
      {todos?.map((todo) => (
        <li style={{ margin: '1rem', padding: '1rem', border: 'solid 1px black' }}>
          <ToDo title={todo.title} text={todo.text} priority={todo.priority} />
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
          }}
          >
            <a href={`/todos/${todo._id}`}>Show ToDo</a>
            <button>Increment Priority</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDos;
