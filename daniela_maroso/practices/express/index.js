const express = require("express");              //la inicializacion// 

const app = express();

app.use(require("./server"))

app.listen(8888,()=>{
    console.log("Servidor corriendo en http://localhost:8888")
})