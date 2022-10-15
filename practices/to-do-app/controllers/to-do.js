const ToDo = require("../models/to-do");

module.exports.index = async (req, res) => {
    console.log("Index Function");
    const toDos = await ToDo.find();
    response.send(toDos);
}

module.exports.create = async (req, res) => {
    console.log("Create Function");
    const toDo = await ToDo.create(req.body);
    response.send(toDo);
}

module.exports.update = (req, res) => {
    console.log("Update Function");
}

module.exports.remove = (req, res) => {
    console.log("Remove Function");
}