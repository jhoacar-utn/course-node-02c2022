/* eslint-disable no-await-in-loop */
const { existsSync, writeFileSync, unlinkSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');
const { extractStudentFolder } = require('./file.cjs');
const {
  ROOT_PATH,
  TIMEOUT_SERVER,
  MINIMAL_PORT,
  PORTS_FILE,
  TIMEOUT_SCRIPT,
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
  await sleep(TIMEOUT_SCRIPT);
};
/**
 * Util function for start the server using
 * a PORT environment variable that changes
 * dinamically and kill his process id
 * execute functions that use his flow
 * @param {()=>Promise<void>} onBeforeStart
 * @param {(port: number)=>Promise<void>} onStarted
 * @param {(error: Error)=>Promise<void>} onTest
 * @param {object} env
 */
const handleTestServer = async ({
  onBeforeStart, onStarted, onTest, env = {}, timeoutServer = TIMEOUT_SERVER,
}) => {
  let port = MINIMAL_PORT;
  let error = null;
  try {
    if (onBeforeStart) {
      await onBeforeStart();
    }
    let portAvailable = false;
    while (!portAvailable) {
      try {
        await startConnection(port);
        port++;
      } catch (e) {
        portAvailable = true;
      }
    }
    loadPort(port);
    await startServer(
      SERVER_PATH,
      { ...process.env, ...env, PORT: port },
    );
    await sleep(timeoutServer);
    if (onStarted) {
      await onStarted(port);
    }
  } catch (e) {
    error = e;
  } finally {
    if (error) {
      console.log(error.message);
    }
    if (onTest) {
      await onTest(error);
    }
  }
};

module.exports = {
  handleTestServer, startServer, killPidsOnPorts, killPidOnPort,
};
