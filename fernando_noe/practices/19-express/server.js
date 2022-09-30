const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
    res.send("<h1>Hola desde el server</h1>");
});

const folderLesson1 = __dirname + "/lesson_1";

app.use("/tasks/lesson_1", express.static(folderLesson1));

module.exports = app;