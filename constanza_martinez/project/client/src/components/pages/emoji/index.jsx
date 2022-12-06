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
import Image from '../../../img/background.jpg';

function Emoji() {
  const { emojiId } = useParams();
  const [loading, emoji, error] = useFetchEmoji(emojiId);

  if (loading && !error) {
    return <Spinner />;
  }

  if (error) {
    toast.error('An error has ocurred on the server');
    return <Typography>Error on the request</Typography>;
  }

  return (
    <Card
      sx={{
        height: '100vh',
        backgroundColor: 'blue',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <CardActions>
        <Link to="/emojis">
          <Button>Regresar</Button>
        </Link>
      </CardActions>
      <CardContent
        sx={{
          width: '20vw',
          margin: 'auto',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <CardContent>
            <EmojiComponent
              emoji={emoji?.emoji}
              name={emoji?.name}
              vote={emoji?.votes}
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default Emoji;
