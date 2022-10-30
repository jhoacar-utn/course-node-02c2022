import { exec } from 'child_process';
import { join } from 'path';
import { existsSync } from 'fs';
import colors from 'colors';
import config from '../config.cjs';

import { killPidsOnPorts, ServerEventEmitter } from './server.cjs';
import { showSpinner } from './spinner.cjs';
import { extractStudentFolder } from './file.cjs';
import startConnection from './net/client.cjs';

const {
  bold, red, yellow, green, cyan,
} = colors;

const {
  ROOT_PATH, DB_URI,
  TIMEOUT_SERVER,
  DEBUG_TEST,
} = config;

const STUDENT_FOLDER = extractStudentFolder();

if (!STUDENT_FOLDER) {
  throw new Error(red('The student folder doesn\'t exists'));
}

const STUDENT_PATH = join(ROOT_PATH, STUDENT_FOLDER);
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const SERVER_PATH = join(PROJECT_PATH, 'server');
const CLIENT_PATH = join(PROJECT_PATH, 'client');

if (!existsSync(CLIENT_PATH)) {
  throw new Error(red(`${bold('client')} folder in ${PROJECT_PATH} is required`));
}
if (!existsSync(SERVER_PATH)) {
  throw new Error(red(`${bold('server')} folder in ${PROJECT_PATH} is required`));
}

const commandSpinner = (command, message) => new Promise((resolve, reject) => {
  let interval = null;
  if (DEBUG_TEST) {
    interval = showSpinner(message);
  }
  exec(command, (error, stdout) => {
    if (DEBUG_TEST && interval) {
      clearInterval(interval);
      console.log('\n');
    }
    if (error) {
      reject(error);
    }
    resolve(stdout);
  });
});
/**
 * This function start the server and returns the port
 * @return {Promise<number | null>}
 */
const handleBeforeRun = async () => {
  if (!existsSync(join(CLIENT_PATH, 'node_modules'))) {
    await commandSpinner(`cd ${CLIENT_PATH} && npm i .`, 'Installing Client Dependecies');
  }
  if (!existsSync(join(SERVER_PATH, 'node_modules'))) {
    await commandSpinner(`cd ${SERVER_PATH} && npm i .`, 'Installing Server Dependecies');
  }
  if (!existsSync(join(CLIENT_PATH, 'dist'))) {
    await commandSpinner(`cd ${CLIENT_PATH} && npm run build`, 'Building Client');
  }
  let serverPort = null;
  const server = new ServerEventEmitter();

  server.on('beforeStart', async () => `${bold(`${cyan('Initializating Server for testing of the Client')}\n\n`)}`);
  server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds to start connection with the server\n\n`);

  server.on('start', async (port) => `Making connection on port ${yellow(port)}: `);
  server.on('start', async (port) => { await startConnection(port); });
  server.on('start', async (port) => green(`- Connection made on the port ${yellow(port)}\n\n`));
  server.on('start', async (port) => { serverPort = port; });

  server.on('error', async (error) => { throw error; });

  server.on('end', async () => cyan(bold('Client Test Starting\n\n')));

  await server.start({ ...process.env, DB_URI });

  return serverPort;
};

const handleAfterRun = async () => {
  await killPidsOnPorts();
};

export { handleBeforeRun, handleAfterRun };
