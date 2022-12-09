const net = require('net');

function handleIncomingData(data) {
  console.log(data.toString());

  let response = 'HTTP/1.1 200 OK\n'; // Para hacer saltos de línea en un string es \n
  response = `${response}Content-type: text/html\n\n`;
  response += '<h1>Saludos desde el servidor</h1>';
  /**
     * HTTP/1.1 200 OK
     * Content-type: text/html
     *
     * Hola desde el servidor
     */
  this.write(response);
  this.end(); // Dejamos de escribir, o mandarle la información al cliente
  this.destroy(); // Cerramos la conexión y mandamos la data que se haya escrito
}

function handleConnection(socket) {
  console.log('conexión recibida');
  socket.on('data', handleIncomingData);
}

const server = net.createServer(handleConnection);

function handleStartServer() {
  console.log('El servidor ya se encuentra en funcionamiento');
}

/**
 * El número de puerto no es cualquier número
 * - Los números van desde 1 hasta 2^16-1 (65535)
 */
server.listen(8888, handleStartServer);
