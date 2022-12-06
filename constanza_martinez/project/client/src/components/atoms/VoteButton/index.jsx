import { Button } from '@mui/material';
import { voteEmoji } from '../../../services/emojis';

export default function VoteEmojiButton({ emojiId, onVoteChange }) {
  const handleVoteEmoji = () => {
    voteEmoji(emojiId)
      .then(() => {
        onVoteChange();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Button onClick={handleVoteEmoji} color="success">
      Votar
    </Button>
  );
}
