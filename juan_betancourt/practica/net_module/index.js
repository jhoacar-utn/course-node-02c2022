

const net= require('net')

function handleIncomingData(data) {
    console.log(data.toString());
   
    let response ='HTTP/1.1 200 OK\n'
    response = response+ 'content-type: text/html\n\n'
    response += '<h1>hola desde el servidor</h1>'




    this.write(response);
    this.end();
    this.destroy()
}

function handleConnection(socket) {

    console.log('coneccion recibida');
    socket.on('data',handleIncomingData)

  
   
    
}

const server= net.createServer(handleConnection)

function handleStartServer(){
    console.log('el servidor ya se encuentra en funcionamiento');
}

server.listen(8888,handleStartServer)