const { join } = require('path');
const EventEmitter = require('./event.cjs');
const { extractStudentFolder, logInFile } = require('./file.cjs');
const {
  ROOT_PATH,
  TIMEOUT_SERVER,
  MINIMAL_PORT,
  DEBUG_TEST,
  DEBUG_FILE,
} = require('../config.cjs');
const { execBackground, loadPort } = require('./shell/index.cjs');
const sleep = require('./sleep.cjs');
const startConnection = require('./net/client.cjs');

const STUDENT_PATH = join(ROOT_PATH, extractStudentFolder());
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const SERVER_PATH = join(PROJECT_PATH, 'server');

/**
 * This function execute the "start" command
 * in specific folder
 * @param {string} path
 */
const executeStartCommand = (path, env) => {
  execBackground(`npm start --prefix=${path}`, { env });
};
/**
 * This function execute 'npm start' in specific folder
 * and return the PID for the process running in background
 * @param {string} path
 * @param {object} env
 * @param {string} pidFile
 * @return {Promise<number>}
 */
const startServer = async (path, env) => {
  executeStartCommand(path, env);
  await sleep(TIMEOUT_SERVER);
};

class ServerEventEmitter extends EventEmitter {
  constructor() {
    super();
    this.port = MINIMAL_PORT;
  }

  /**
   *
   * @param {"beforeStart" | "start" | "error" | "end"} type
   * @param {Function} fn
   * @returns
   */
  on(type, fn) {
    return super.on(type, fn);
  }

  /**
     *
     * @param {"beforeStart" | "start" | "error" | "end"} type
     * @param  {...any} args
     * @returns
     */
  async emit(type, ...args) {
    const contents = super.emit(type, ...args);
    // eslint-disable-next-line no-restricted-syntax
    for await (const content of contents) {
      if (typeof content === 'string') {
        if (DEBUG_TEST) {
          process.stdout.write(content);
        }
        if (DEBUG_FILE) {
          logInFile(content);
        }
      }
    }
  }

  async setPortAvailable() {
    let portAvailable = false;
    while (!portAvailable) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await startConnection(this.port);
        this.port++;
      } catch (e) {
        portAvailable = true;
      }
    }
    loadPort(this.port);
  }

  /**
   * This function start the server
   * @param {object} env
   */
  async start(env = {}) {
    try {
      await this.emit('beforeStart');

      await this.setPortAvailable();

      await startServer(SERVER_PATH, { ...process.env, ...env, PORT: this.port });

      await this.emit('start', this.port);
    } catch (error) {
      await this.emit('error', error);
    } finally {
      await this.emit('end');
    }
  }
}

module.exports = {
  ServerEventEmitter,
};
