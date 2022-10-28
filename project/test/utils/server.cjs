/* eslint-disable no-await-in-loop */
const { writeFileSync } = require('fs');
const { join } = require('path');
const { exec } = require('child_process');
const { extractStudentFolder } = require('./file.cjs');
const {
  ROOT_PATH,
  TIMEOUT_SCRIPT,
  TIMEOUT_SERVER,
  PID_FILE,
  MINIMAL_PORT,
} = require('../config.cjs');
const { execBackground, killProcess } = require('./shell/index.cjs');
const sleep = require('./sleep.cjs');
const startConnection = require('./net/client.cjs');

const STUDENT_PATH = join(ROOT_PATH, extractStudentFolder());
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const SERVER_PATH = join(PROJECT_PATH, 'server');

/**
 * This function returns the PID saved in the file
 * @param {string} pidFile
 * @return {Promise<number | null>}
 */
const getPID = (port) => {
  const isWin = process.platform === 'win32';

  const linuxCommand = `netstat -ltnp 2>/dev/null | grep :${port} | awk '{print $NF}' | awk -F '/' '{print $1}'`;
  const windowsCommand = `netstat -ano -p tcp 2>/dev/null | grep ${port} | awk '{print $NF}'`;

  const command = isWin ? windowsCommand : linuxCommand;
  return new Promise((resolve) => {
    if (!port) {
      resolve(null);
    }
    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(null);
      } else if (stdout || stderr) {
        resolve(stdout + stderr);
      } else {
        resolve(null);
      }
    });
  });
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
 * @return {Promise<number>}
 */
const startServer = async (path, env) => {
  const { PORT: port } = env;
  executeStartCommand(path, env);
  await sleep(TIMEOUT_SCRIPT);
  const pid = await getPID(port);
  if (pid) {
    writeFileSync(PID_FILE.replace('.txt', `-port-${port}.txt`), pid);
  }
  return pid;
};
/**
 * Util function for start the server using
 * a PORT environment variable that changes
 * dinamically and kill his process id
 * execute functions that use his flow
 * @param {()=>Promise<void>} onBeforeStart
 * @param {(port: number, PID: number)=>Promise<void>} onStarted
 * @param {(error: Error)=>Promise<void>} onTest
 * @param {object} env
 */
const handleTestServer = async (onBeforeStart, onStarted, onTest, env = {}) => {
  let PID = null;
  let error = null;
  let port = MINIMAL_PORT;
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
    PID = await startServer(
      SERVER_PATH,
      { ...process.env, ...env, PORT: port },
    );
    await sleep(TIMEOUT_SERVER);
    if (onStarted) {
      await onStarted(port, PID);
    }
  } catch (e) {
    error = e;
  } finally {
    if (PID) {
      await killProcess(PID);
    }
    if (error) {
      console.log(error);
    }
    if (onTest) {
      await onTest(error);
    }
  }
};

module.exports = { handleTestServer, startServer };
