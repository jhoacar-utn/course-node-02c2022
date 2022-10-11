/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();

app.use(require('./server'));

app.listen(8888, () => {
  console.log('Servidor corriendo en http://localhost:8888');
});
