import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ShowEmojiButton({ id }) {
  return (
    <Link to={`/emojis/${id}`} style={{ textDecoration: 'none' }}>
      <Button
        size="small"
        color="primary"
        variant="contained"
        style={{ color: 'white ', margin: '10px' }}
      >
        Show
      </Button>
    </Link>
  );
}
