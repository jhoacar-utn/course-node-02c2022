import {
  Button, Card, CardActions, CardContent,
} from '@mui/material';
import ToDoComponent from '../../atoms/ToDo';

function ToDo() {
  return (
    <Card>
      <CardActions>
        <Button href="/todos">Regresar a la lista de tareas</Button>
      </CardActions>
      <CardContent>
        <Card>
          <CardContent>
            <ToDoComponent title="titulo" text="texto" priority="10" />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}

export default ToDo;
