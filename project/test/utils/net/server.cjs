const { createServer } = require('net');

/**
 * This function create a new server
 * Then when a new connection is received,
 * a message is sent and closed the connection
 * @param {number} port
 * @param {(server: Server) => Promise<void>} onStart
 * @param {() => void} onConnection
 * @return {Promise<Server>}
 */
const getServer = (port, onStart, onConnection) => new Promise((resolve, reject) => {
  const server = createServer(function (socket) {
    onConnection();
    socket.write('\r\nHello from server\r\n');
    socket.end();
    socket.destroy();
    this.close(() => this.unref());
  });
  server.on('error', reject);
  server.listen(port, async () => {
    await onStart(server);
    resolve();
  });
});

module.exports = getServer;
