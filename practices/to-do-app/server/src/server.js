/* eslint-disable import/no-unresolved */
const express = require('express');

const app = express();

app.use(require('./routes'));

module.exports = app;
