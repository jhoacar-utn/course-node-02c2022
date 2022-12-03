function ToDo({ title, text, priority }) {
  return (
    <div>
      <h2>{title}</h2>
      {' '}
      <p>{text}</p>
      {' '}
      <span>{priority}</span>
    </div>
  );
}

export default ToDo;
