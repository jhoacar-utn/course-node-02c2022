const ToDo = require("../models/to-do");

module.exports.index = async (req, res) => {
    console.log("Index Function");
    const toDos = await ToDo.find();
    res.send(toDos);
}

module.exports.create = async (req, res) => {
    console.log("Create Function");
    const toDo = await ToDo.create(req.body);
    res.send(toDo);
}

module.exports.update = async (req, res) => {
    console.log("Update Function");
    await ToDo.updateOne({ title: req.query.title }, req.body);
    res.send("Updated");
}

module.exports.remove = async (req, res) => {
    console.log("Remove Function");
    await ToDo.deleteOne({ title: req.query.title });
    res.send("Removed");
}