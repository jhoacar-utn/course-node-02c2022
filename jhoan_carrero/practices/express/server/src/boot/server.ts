import express from 'express';
import morgan from 'morgan';
import router from '@routes';

const app = express();

app.use(morgan('combined'));

app.use(router);

export default app;
