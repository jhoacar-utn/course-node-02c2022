module.exports.handleGetTodo = (request,response)=>{
    response.send("Get Todo");
};

module.exports.handlePostTodo = (request,response)=>{
    response.send("Post Todo");
};

module.exports.handlePutTodo = (request,response)=>{
    response.send("Put Todo");
};

module.exports.handleDeleteTodo = (request,response)=>{
    response.send("Delete Todo");
};