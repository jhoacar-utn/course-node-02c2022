/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Hello from Server</h1>');
});

module.exports = app;
