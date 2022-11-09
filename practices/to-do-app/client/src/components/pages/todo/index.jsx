import {
  Button, Card, CardActions, CardContent,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import Spinner from '../../atoms/Spinner';
import ToDoComponent from '../../atoms/ToDo';
import useFetchToDo from './useFetchToDo';

function ToDo() {
  const { toDoId } = useParams();
  const [loading, toDo] = useFetchToDo(toDoId);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Card>
      <CardActions>
        <Button href="/todos">Regresar a la lista de tareas</Button>
      </CardActions>
      <CardContent>
        <Card>
          <CardContent>
            <ToDoComponent title={toDo?.title} text={toDo?.text} priority={toDo?.priority} />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default ToDo;
