import { Card, CardContent, Typography } from '@mui/material';
import EmojisComponent from '../../molecules/Emojis';
import Image from '../../../img/background.jpg';

function Emojis() {
  return (
    <div>
      <Card>
        <CardContent
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexWrap: 'wrap',
            backgroundColor: 'green',
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Typography variant="h5">Lista de Emojis</Typography>
          <EmojisComponent />
        </CardContent>
      </Card>
    </div>
  );
}

export default Emojis;
