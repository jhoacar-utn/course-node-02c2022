import express from 'express';
import morgan from 'morgan';
import open from 'open';
import router from './routes';

const app = express();

app.use(morgan('combined'));

app.use(router);

app.listen(8888, () => {
  open('http://localhost:8888')
    .then(() => {
      console.log('Se ha abierto el navegador');
    })
    .catch((error) => {
      console.log('Ha ocurrido un error', error.message);
    });
});
