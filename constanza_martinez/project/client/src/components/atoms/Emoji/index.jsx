function Emoji({ emoji, name, vote }) {
  return (
    <div>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <span>{vote}</span>
    </div>
  );
}

export default Emoji;
