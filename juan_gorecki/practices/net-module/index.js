const net = require ("net");
const { addListener } = require("process");

function handleIncomingData(data){
    console.log(data.toString())

    let response = "HTTP/1.1 200 OK\n" //para hacer saltos de linea en string se usa el \n
    response = response + "Content-type: text/html\n\n"
    response += "<h1>hola desde el server</h1>";

    this.write(response);
    this.end();//dejamos de mandar info al cliente
    this.destroy();//cerramos la conexion y mandamos la data
    
}

function handleConnection(socket){
    console.log("conexion recibida")
    socket.on("data",handleIncomingData)
    
    
    
}

const server = net.createServer(handleConnection);

function handleStartServer(){
    console.log("el servidor ya se encuentra en funcionamiento")
}

/* el numero de puerto no es cualquiera
los num van de 1 hasta el 65.535 (2°16-1) */
server.listen(8888,handleStartServer)