/**
 * This file run under jest environment
 */
const {
  describe, test, expect,
} = require('@jest/globals');
const { existsSync, unlinkSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');
const {
  yellow, bold, green, red,
} = require('colors');
const { ROOT_PATH, DEBUG_TEST } = require('./config.cjs');
const { extractStudentFolder } = require('./utils/file.cjs');

const STUDENT_FOLDER = extractStudentFolder();
if (!STUDENT_FOLDER) {
  throw new Error(red('The student folder doesn\'t exist'));
}

const STUDENT_PATH = join(ROOT_PATH, STUDENT_FOLDER);
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const CLIENT_PATH = join(PROJECT_PATH, 'client');
const SERVER_PATH = join(PROJECT_PATH, 'server');

describe('Folder and Files Testing', () => {
  test(`Must have "client" and "server" folder in ${PROJECT_PATH}`, () => {
    expect(existsSync(join(PROJECT_PATH, 'server'))).toBe(true);
    expect(existsSync(join(PROJECT_PATH, 'client'))).toBe(true);
  });
  test(`Must have a "package.json" in ${PROJECT_PATH}`, () => {
    expect(existsSync(join(PROJECT_PATH, 'package.json'))).toBe(true);
  });
  test(`Must have a "prepare" script in the "package.json" of ${PROJECT_PATH} for install "client" and "server" dependencies`, () => {
    expect(require(join(PROJECT_PATH, 'package.json')).scripts).toHaveProperty(
      'prepare',
    );
    if (existsSync(join(CLIENT_PATH, 'package-lock.json'))) {
      unlinkSync(join(CLIENT_PATH, 'package-lock.json'));
    }
    if (existsSync(join(SERVER_PATH, 'package-lock.json'))) {
      unlinkSync(join(SERVER_PATH, 'package-lock.json'));
    }

    if (DEBUG_TEST) {
      process.stdout.write(`Executing ${yellow('npm install')} on ${bold(PROJECT_PATH)} - `);
    }
    execSync(`cd ${PROJECT_PATH} && npm install`);
    if (DEBUG_TEST) {
      process.stdout.write(green('executed\n\n'));
    }

    expect(existsSync(join(CLIENT_PATH, 'package-lock.json'))).toBe(true);
    expect(existsSync(join(SERVER_PATH, 'package-lock.json'))).toBe(true);
  });
  test(`Must have a "build" script in the package.json of ${PROJECT_PATH} for build the client`, () => {
    expect(require(join(PROJECT_PATH, 'package.json')).scripts).toHaveProperty(
      'build',
    );
    expect(require(`${PROJECT_PATH}/package.json`).scripts.build).toBe(
      'cd client && npm run build',
    );
  });
  test(`Must have a "start" script in the package.json of ${PROJECT_PATH} for start the server`, async () => {
    expect(require(join(PROJECT_PATH, 'package.json')).scripts).toHaveProperty(
      'start',
    );
    expect(require(`${PROJECT_PATH}/package.json`).scripts.start).toBe(
      'cd server && npm start',
    );
  });
});
