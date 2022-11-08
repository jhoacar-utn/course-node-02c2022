import {
  Card, CardContent, Typography,
} from '@mui/material';
import ToDosComponent from '../../molecules/ToDos';
import NavBar from '../../organisms/NavBar';

function ToDos() {
  return (
    <div>
      <NavBar />
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
