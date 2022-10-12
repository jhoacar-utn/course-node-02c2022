const express = require("express");

const {
    handleGetTodo,
    handlePostTodo,
    handlePutTodo,
    handleDeleteTodo } = require("./controller");

const app = express();

app.get("/to-do", handleGetTodo);
app.post("/to-do", handlePostTodo);
app.put("/to-do", handlePutTodo);
app.delete("/to-do", handleDeleteTodo);

module.exports = app;