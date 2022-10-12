const express = require("express");

const {
    handleGetTodo,
    handlePostTodo,
    handlePutTodo,
    handleDeleteTodo } = require("./controllers");

const app = express();

app.use(express.json());

app.get("/to-do", handleGetTodo);
app.post("/to-do", handlePostTodo);
app.put("/to-do", handlePutTodo);
app.delete("/to-do", handleDeleteTodo);

module.exports = app;