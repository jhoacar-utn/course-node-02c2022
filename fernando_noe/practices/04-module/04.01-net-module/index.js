const net = require('net');

function handleIncomingData(data){
    console.log(data.toString()); //Traemos la información desde el navegador

    let response = "HTTP/1.1 200 OK\n"; /* Para hacer salto de linea es usando "\n" */  
    response += "Content-type: text/html\n\n";
    response += "<h1>Hola Mundo</h1>";

    this.write(response);
    this.end(); //Dejamos de mandarle información al cliente
    this.destroy(); //Cerramos la conexion
};

function handleConection(socket){
    console.log("......Conexión establecida......");
    socket.on("data",handleIncomingData);
    
};
const server = net.createServer(handleConection);  /*"createServer" es un Método de "net"*/

function handleStartServer(){
    console.log("El servidor se encuentra funcionando!");
}

/*Hacemos que escuche el evento, el parametro 1 es el puerto, el 2do parametro es la callback
-Los números de puertos pueden ser de 1 a 65535 (2^16-1)*/
server.listen(8888, handleStartServer); 