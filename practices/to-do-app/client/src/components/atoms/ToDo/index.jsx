function ToDo(props) {
  const { title, text, priority } = props;

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
