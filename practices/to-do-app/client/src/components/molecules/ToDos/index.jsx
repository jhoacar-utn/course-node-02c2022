import {
  Button,
  Card, CardActions, CardContent, List, ListItem,
} from '@mui/material';
import Spinner from '../../atoms/Spinner';
import ToDo from '../../atoms/ToDo';
import useFetchToDos from './useFetchToDos';

function ToDos() {
  const [loading, listToDos] = useFetchToDos();

  if (loading) {
    return (
      <Spinner />
    );
  }

  return (
    <List>
      {listToDos?.map((todo) => (
        <ListItem>
          <Card sx={{ width: 500 }}>
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
