import ToDo from '../../atoms/ToDo';
import useFetchToDos from './useFetchToDos';

function ToDos() {
  const [loading, listToDos] = useFetchToDos();

  if (loading) {
    return (
      <div>
        Cargando lista de tareas
      </div>
    );
  }

  return (
    <ul>
      {listToDos?.map((todo) => (
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
