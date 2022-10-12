const ToDo = require("./model");

module.exports.handleGetTodo = async (request,response)=>{
    const toDos = await ToDo.find();
    response.send(toDos);
};

module.exports.handlePostTodo = async (request,response)=>{
    const toDo = await ToDo.create(request.body);
    response.send(toDo);
};

module.exports.handlePutTodo = (request,response)=>{
    response.send("Put Todo");
};

module.exports.handleDeleteTodo = (request,response)=>{
    response.send("Delete Todo");
};