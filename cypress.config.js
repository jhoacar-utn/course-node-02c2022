import 'dotenv/config';
import './project/test/index.mjs';

import { exec } from 'child_process';
import { join } from 'path';
import { existsSync } from 'fs';
import { defineConfig } from 'cypress';
import config from './project/test/config.cjs';

import { killPidOnPort, startServer } from './project/test/utils/server.cjs';
import sleep from './project/test/utils/sleep.cjs';
import { showSpinner } from './project/test/utils/spinner.cjs';
import { extractStudentFolder } from './project/test/utils/file.cjs';

const {
  ROOT_PATH, TIMEOUT_SERVER, PORT, DB_URI,
} = config;

const STUDENT_PATH = join(ROOT_PATH, extractStudentFolder());
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const CLIENT_PATH = join(PROJECT_PATH, 'client');
const SERVER_PATH = join(PROJECT_PATH, 'server');

const handleBeforeRun = async () => {
  if (!existsSync(CLIENT_PATH)) {
    throw new Error(`"client" folder in ${PROJECT_PATH} is required`);
  }
  if (!existsSync(join(CLIENT_PATH, 'node_modules'))) {
    await new Promise((resolve, reject) => {
      const interval = showSpinner('Installing Client Dependecies');
      exec(`cd ${CLIENT_PATH} && npm i .`, (error, stdout) => {
        clearInterval(interval);
        console.log('\n');
        if (error) {
          reject(error);
        }
        resolve(stdout);
      });
    });
  }
  if (!existsSync(join(SERVER_PATH, 'node_modules'))) {
    await new Promise((resolve, reject) => {
      const interval = showSpinner('Installing Server Dependecies');
      exec(`cd ${SERVER_PATH} && npm i .`, (error, stdout) => {
        clearInterval(interval);
        console.log('\n');
        if (error) {
          reject(error);
        }
        resolve(stdout);
      });
    });
  }
  if (!existsSync(join(CLIENT_PATH, 'dist'))) {
    await new Promise((resolve, reject) => {
      const interval = showSpinner('Building Client');
      exec(`cd ${CLIENT_PATH} && npm run build`, (error, stdout) => {
        clearInterval(interval);
        console.log('\n');
        if (error) {
          reject(error);
        }
        resolve(stdout);
      });
    });
  }
  await startServer(SERVER_PATH, { ...process.env, PORT, DB_URI });
  await sleep(TIMEOUT_SERVER);
};

const handleAfterRun = async () => {
  await killPidOnPort(PORT);
};

export default defineConfig({
  e2e: {
    supportFile: false,
    specPattern: '**/client.test.js',
    setupNodeEvents(on) {
      on('before:run', handleBeforeRun);
      on('after:run', handleAfterRun);
    },
  },
  experimentalInteractiveRunEvents: true,
});
