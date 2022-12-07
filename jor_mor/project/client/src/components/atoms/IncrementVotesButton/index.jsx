import { Button } from '@mui/material';
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
    <Button
      size="small"
      color="secondary"
      variant="contained"
      style={{ color: 'white ', margin: '10px' }}
      onClick={handleIncrementVotes}
    >
      Vote
    </Button>

  // <button onClick={handleIncrementVotes} color="success">
  //   Vote
  // </button>
  );
}
