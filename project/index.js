import './test/index.mjs';

import { exec } from 'child_process';
import colors from 'colors';
import { existsSync, readFileSync, unlinkSync } from 'fs';
import config from './test/config.cjs';
import { showSpinner } from './test/utils/spinner.cjs';

const { ROOT_PATH, LOG_FILE } = config;
const {
  yellow, cyan, bold, red,
} = colors;
const DEBUG_SERVER = process.env.DEBUG_SERVER || false;

if (DEBUG_SERVER) {
  if (existsSync(LOG_FILE)) {
    unlinkSync(LOG_FILE);
  }
}

/**
 * @param {string} command
 * @returns {Promise<string>}
 */
const execPromise = (command, loading) => {
  let interval = null;
  if (DEBUG_SERVER) {
    console.log(loading);
  } else {
    interval = showSpinner(loading);
  }
  return new Promise((resolve) => {
    exec(command, (error, stdout) => {
      if (interval) {
        clearInterval(interval);
      }
      console.log('\n');
      if (DEBUG_SERVER) {
        if (existsSync(LOG_FILE)) {
          console.log('----------------------------------------------');
          console.log(`🐛 CONTENT OF ${LOG_FILE}\n`);
          console.log('----------------------------------------------');
          console.log(readFileSync(LOG_FILE).toString());
          console.log('----------------------------------------------');
          unlinkSync(LOG_FILE);
        }
      }
      resolve(stdout.toString());
    });
  });
};

/**
 * @param {string} output
 * @return {number}
 */
const countTestPassedByJest = (output) => {
  const REGEX_LINE = /Tests:[\s\w\d,]*total/;
  const line = output.match(REGEX_LINE);
  if (line.length === 0) {
    return 0;
  }
  const REGEX_PASSED = /\s([\d]*)\spassed/;
  const passed = line.shift().match(REGEX_PASSED);

  return !passed || passed.length === 0 ? 0 : passed.pop();
};
/**
 * @param {string} output
 * @return {number}
 */
const countTestPassedByCypress = (output) => {
  const REGEX_PASSED = /\s([\d]*)\spassing/;
  const passed = output.match(REGEX_PASSED);

  return !passed || passed.length === 0 ? 0 : passed.pop();
};

const resultMain = await execPromise(
  `cd ${ROOT_PATH} && npm run test:main -- --silent 2>&1`,
  `Executing: ${yellow('Main Testing')}`,
);
const resultServer = await execPromise(
  `cd ${ROOT_PATH} && npm run test:server -- --silent 2>&1`,
  `Executing: ${yellow('Server Testing')}`,
);
const resultClient = await execPromise(
  `cd ${ROOT_PATH} && npm run test:client -- -q --config video=false,screenshotOnRunFailure=false 2>&1`,
  `Executing: ${yellow('Client Testing')}`,
);

const mainTestPassed = countTestPassedByJest(resultMain);
const serverTestPassed = countTestPassedByJest(resultServer);
const clientTestPassed = countTestPassedByCypress(resultClient);

console.log(
  cyan(`There are a total of ${bold(mainTestPassed)} tests passed in structure`),
);
console.log(
  cyan(`There are a total of ${bold(serverTestPassed)} tests passed in server`),
);
console.log(
  cyan(`There are a total of ${bold(clientTestPassed)} tests passed in client`),
);

if (mainTestPassed + serverTestPassed + clientTestPassed >= 15) {
  console.log(yellow('\nCONGRATULATIONS! You are approved'));
  process.exit(0);
} else {
  console.log(red('\nYou need more tests passed to approve'));
  process.exit(1);
}
