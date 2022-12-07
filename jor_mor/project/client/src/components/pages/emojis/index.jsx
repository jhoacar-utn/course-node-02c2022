import { Card, CardContent, Typography } from '@mui/material';
import EmojisComponent from '../../molecules/Emojis';

function Emojis() {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h5">Lista de Emojis</Typography>
          <EmojisComponent />
        </CardContent>
      </Card>
    </div>
  );
}

export default Emojis;
