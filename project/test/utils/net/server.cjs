/* eslint-disable no-restricted-syntax */
const { createServer } = require('net');
const { DEBUG_TEST } = require('../../config.cjs');
const EventEmitter = require('../event.cjs');

class FakeServerEventEmitter extends EventEmitter {
  /**
   *
   * @param {"beforeStart" | "start" | "connection" | "error"} type
   * @param {Function} fn
   * @returns
   */
  on(type, fn) {
    return super.on(type, fn);
  }

  /**
     *
     * @param {"beforeStart" | "start" | "connection" | "error"} type
     * @param  {...any} args
     * @returns
     */
  async emit(type, ...args) {
    const contents = super.emit(type, ...args);
    for await (const content of contents) {
      if (DEBUG_TEST && typeof content === 'string') {
        process.stdout.write(content);
      }
    }
  }

  /**
   * This function start the fake server
   * @param {number} port
   * @return {Promise<Server>}
   */
  start(port) {
    return new Promise((resolve, reject) => {
      if (!port) {
        throw new Error('port is required to start fake server!');
      }
      this.emit('beforeStart')
        .then(() => {
          const server = createServer();
          server.on('connection', async (socket) => {
            await this.emit('connection', socket);
            socket.write('\r\nHello from server\r\n');
            socket.end();
            socket.destroy();
            server.close(() => server.unref());
          });
          server.on('error', async (error) => {
            await this.emit('error', error);
            reject(error);
          });
          server.listen(port, async () => {
            await this.emit('start', server);
            resolve();
          });
        });
    });
  }
}

module.exports = FakeServerEventEmitter;
