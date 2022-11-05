import ToDoComponent from '../../atoms/ToDo';

function ToDo() {
  return (
    <div>
      Tarea especifica
      <div>
        <a href="/todos">Regresar a la lista de tareas</a>
      </div>
      <div style={{ margin: '1rem', padding: '1rem', border: 'solid 1px black' }}>
        <ToDoComponent title="titulo" text="texto" priority="10" />
      </div>
    </div>
  );
}

export default ToDo;
