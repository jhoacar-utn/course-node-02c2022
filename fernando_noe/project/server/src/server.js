const express = require('express');

const app = express();

app.use(express.json());

app.use(require('./routes'));

module.exports = app;

/*
const {handleGetEmoji} = require("./controllers");
app.get("/api/v1/emojis", handleGetEmoji);
*/
