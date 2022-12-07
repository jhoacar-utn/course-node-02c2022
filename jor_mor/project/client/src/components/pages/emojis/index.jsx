import { Card, CardContent, Typography } from '@mui/material';
import EmojisComponent from '../../molecules/Emojis';

function Emojis() {
  return (
    <div>
      <Card
        style={{
          fontFamily: 'inherit',
        }}
      >
        <CardContent
          style={{
            backgroundColor: '#eeeee4',
          }}
        >
          <Typography
            variant="h5"
            style={{
              display: 'flex',
              marginBottom: '30px',
              justifyContent: 'center',
              fontSize: '2rem',
              fontFamily: 'sans-serif',

              fontWeight: 'bold',
            }}
          >
            Lista de Emojis
          </Typography>
          <EmojisComponent />
        </CardContent>
      </Card>
    </div>
  );
}

export default Emojis;
