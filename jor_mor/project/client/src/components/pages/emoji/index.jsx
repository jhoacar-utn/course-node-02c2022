import toast from 'react-hot-toast';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../../atoms/Spinner';
import EmojiComponent from '../../atoms/Emoji';
import useFetchEmoji from './useFetchEmoji';
import Jaipur from '../../../img/Jaipur.jpg';

function Emoji() {
  const { id } = useParams();
  const [loading, emoji, error] = useFetchEmoji(id);

  if (loading && !error) {
    return <Spinner />;
  }

  if (error) {
    toast.error('An error has ocurred on the server');
    return <Typography>Error on the request</Typography>;
  }

  return (
    <Card>
      <CardActions>
        <Link to="/emojis" style={{ textDecoration: 'none' }}>
          <Button size="small" color="primary" variant="contained">
            Volver
          </Button>
        </Link>
      </CardActions>

      <Card
        style={{
          display: 'flex',
          backgroundImage: `url(${Jaipur})`,
          opacity: '0.9',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'auto',
        }}
        elevation={10}
      >
        <CardContent>
          <EmojiComponent
            title={emoji?.name}
            text={emoji?.emoji}
            votes={emoji?.votes}
          />
        </CardContent>
      </Card>
    </Card>
  );
}

export default Emoji;
