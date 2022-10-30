/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
const { existsSync, writeFileSync, unlinkSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');
// const { bold, yellow } = require('colors');
const EventEmitter = require('./event.cjs');
const { extractStudentFolder, logInFile } = require('./file.cjs');
const {
  ROOT_PATH,
  TIMEOUT_SERVER,
  MINIMAL_PORT,
  PORTS_FILE,
  DEBUG_TEST,
} = require('../config.cjs');
const { execBackground } = require('./shell/index.cjs');
const sleep = require('./sleep.cjs');
const startConnection = require('./net/client.cjs');

const STUDENT_PATH = join(ROOT_PATH, extractStudentFolder());
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const SERVER_PATH = join(PROJECT_PATH, 'server');

/**
 * This function load port used
 * @param {string} port
 */
const loadPort = (port) => {
  if (!port) {
    return;
  }
  if (!existsSync(PORTS_FILE)) {
    writeFileSync(PORTS_FILE, '[]');
  }
  const content = require(PORTS_FILE);
  content.push(port);
  writeFileSync(PORTS_FILE, JSON.stringify(content));
};
/**
 * This function kill a PID on a PORT
 * @param {string} port
 * @return {Promise<void>}
 */
const killPidOnPort = (port) => {
  const isWin = process.platform === 'win32';
  const linuxCommand = `kill $(netstat -ltnp 2>/dev/null | grep :${port} | awk '{print $NF}' | awk -F '/' '{print $1}' )`;
  const windowsCommand = `kill $(netstat -ano -p tcp 2>/dev/null | grep ${port} | awk '{print $NF}')`;

  const command = isWin ? windowsCommand : linuxCommand;
  return new Promise((resolve) => {
    if (!port) {
      resolve(null);
    }
    exec(command, () => resolve(null));
  });
};
/**
 * This function kill all PID on PORTS
 * @return {Promise<void>}
 */
const killPidsOnPorts = async () => {
  if (!existsSync(PORTS_FILE)) {
    return null;
  }
  const ports = require(PORTS_FILE);
  // eslint-disable-next-line no-restricted-syntax
  for (const port of ports) {
    await killPidOnPort(port);
  }
  unlinkSync(PORTS_FILE);
  return null;
};
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
    for await (const content of contents) {
      if (DEBUG_TEST && typeof content === 'string') {
        logInFile(`DEBUGGER: ${content}`);
        process.stdout.write(content);
      }
    }
  }

  async setPortAvailable() {
    let portAvailable = false;
    while (!portAvailable) {
      try {
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
  ServerEventEmitter, killPidsOnPorts, killPidOnPort,
};
