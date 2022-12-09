/* eslint-disable no-unused-vars */
function Emoji(props) {
  const {
    id, emoji, name, votes,
  } = props;

  return (
    <div>
      <h1>{emoji}</h1>
      ,
      {' '}
      <h2>{name}</h2>
      ,
      {' '}
      <span>{votes}</span>
      <div>
        <a href={`/emojis/${id}`}>Show</a>
        <button>Vote</button>
      </div>
    </div>
  );
}

export default Emoji;
