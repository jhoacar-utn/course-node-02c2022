import {
  Card, CardActions, CardContent, List, ListItem, Typography,
} from '@mui/material';
import IncrementPriorityButton from '../../atoms/IncrementPriorityButton';
import ShowToDoButton from '../../atoms/ShowToDoButton';
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
              <ShowToDoButton toDoId={todo._id} />
              <IncrementPriorityButton toDoId={todo._id} />
            </CardActions>
          </Card>
        </ListItem>
      ))}
    </List>
  );
}

export default ToDos;
