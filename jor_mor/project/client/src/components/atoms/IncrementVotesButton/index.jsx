import { incrementVotes } from '../../../services/emojis';

export default function IncrementVotesButton({ id, onChangeVotes }) {
  const handleIncrementVotes = () => {
    incrementVotes(id)
      .then(() => {
        onChangeVotes();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button onClick={handleIncrementVotes} color="success">
      Vote
    </button>
  );
}
