const net = require('net');

function handleIncomingData(data){
    console.log(data.toString());

    let response = "HTTP/1.1 200 OK\n";
    response = response + "Content-type: text/html\n\n";
    response += "<h1>Hola mundo!</h1>"

    this.write(response);
    this.end(); // Dejamos de escribir o mandarle informacion al cliente
    this.destroy(); // Cerramos la conexion y mandamos la data que se haya escrito  
}

function handleConnection(socket){
    console.log("Conexion recibida");
    socket.on("data", handleIncomingData);
}

const server = net.createServer(handleConnection);

function handleStartServer(){
    console.log("El servidor ya se encuentra en funcionamiento")
}

/**
 * El numero de puerto no es cualquier numero
 * Los numeros van desde el 1 al (2^16-1)
 */
server.listen(8888, handleStartServer);