import {
  Button,
  Card, CardActions, CardContent, List, ListItem, Typography,
} from '@mui/material';
import Spinner from '../../atoms/Spinner';
import ToDo from '../../atoms/ToDo';
import useFetchToDos from './useFetchToDos';

function ToDos() {
  const [loading, listToDos, error] = useFetchToDos();

  if (loading && !error) {
    return (
      <Spinner />
    );
  }

  if (error) {
    return (
      <Typography>An error has ocurred on the server</Typography>
    );
  }

  return (
    <List sx={{
      width: '100%',
    }}
    >
      {listToDos?.map((todo) => (
        <ListItem>
          <Card sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
          >
            <CardContent>
              <ToDo title={todo.title} text={todo.text} priority={todo.priority} />
            </CardContent>
            <CardActions>
              <Button href={`/todos/${todo._id}`}>Show ToDo</Button>
              <Button color="success">Increment Priority</Button>
            </CardActions>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}

export default ToDos;
