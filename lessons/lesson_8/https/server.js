/* eslint-disable import/no-unresolved */
const app = require('express')();

app.get('/', (req, res) => {
  res.send('<h1>Hola desde el servidor</h1>');
});

module.exports = app;
