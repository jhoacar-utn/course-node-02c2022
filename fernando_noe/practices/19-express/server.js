const express = require("express");

const app = express();

//De esta Forma compartimos la ruta directa con información
app.get("/", (req, res, next) => {
    res.send("<h1>Hola desde el server</h1>");
});

//De esta Forma compartimos la ruta de una Carpeta
const folderLesson1 = __dirname + "/lesson_1";

app.use("/tasks/lesson_1", express.static(folderLesson1));

module.exports = app;