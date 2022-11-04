function ToDo(props) {
  const { title, text, priority } = props;
  return (
    <>
      Tarea:
      <h2>
        Titulo:
        {' '}
        {title}
      </h2>
      <p>
        Text:
        {' '}
        {text}
      </p>
      <span>
        Priority:
        {' '}
        {priority}
      </span>
    </>
  );
}

export default ToDo;
