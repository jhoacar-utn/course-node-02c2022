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
        <Link to="/emojis">
          <Button>Regresar a la lista de tareas</Button>
        </Link>
      </CardActions>
      <CardContent>
        <Card>
          <CardContent>
            <EmojiComponent
              title={emoji?.name}
              text={emoji?.emoji}
              votes={emoji?.votes}
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default Emoji;
