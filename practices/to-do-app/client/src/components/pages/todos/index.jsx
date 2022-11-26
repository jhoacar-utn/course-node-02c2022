import {
  Card, CardContent, Typography,
} from '@mui/material';
import ToDosComponent from '../../molecules/ToDos';

function ToDos() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5">
            Lista de Tareas
          </Typography>
          <ToDosComponent />
        </CardContent>
      </Card>
    </div>
  );
}

export default ToDos;
