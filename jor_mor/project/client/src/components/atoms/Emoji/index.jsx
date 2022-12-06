function Emoji({ title, text, votes }) {
  return (
    <div>
      <h2>{title}</h2>
      {' '}
      <p>{text}</p>
      {' '}
      <span>{votes}</span>
    </div>
  );
}

export default Emoji;
