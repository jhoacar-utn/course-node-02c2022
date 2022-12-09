/* eslint-disable no-unused-vars */
function Emoji(props) {
  const { emoji, name, votes } = props;

  return (
    <div>
      <h1>{emoji}</h1>
      ,
      {' '}
      <h2>{name}</h2>
      ,
      {' '}
      <span>{votes}</span>
    </div>
  );
}

export default Emoji;
