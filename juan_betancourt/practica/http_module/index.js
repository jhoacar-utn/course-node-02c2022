const http = require("http")

function handleConnection(){
    console.log("Conexion establecida")
}

const server = http.createServer(handleConnection);


function handleStartServer(){
    console.log("Servidor funcionando correctamente")
}

server.listen(8888,handleStartServer)
