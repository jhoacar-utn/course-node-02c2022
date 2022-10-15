const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    title: String,
    text: String,
    importance: Number,
});

const ToDo = mongoose.model('Todo', toDoSchema);

module.exports = ToDo;
