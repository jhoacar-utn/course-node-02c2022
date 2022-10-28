const { createConnection } = require('net');

/**
 * This function create a new connection on port specific
 * and return "connection sucesss" in resolve of the Promise
 * or reject with the error
 * @param {number} port
 * @return {Promise<string | Error>}
 */
const startConnection = (port) => new Promise((resolve, reject) => {
  const client = createConnection(port, '127.0.0.1');
  client.on('connect', () => {
    client.destroy();
    resolve('connection success');
  });
  client.on('error', reject);
});

module.exports = startConnection;
