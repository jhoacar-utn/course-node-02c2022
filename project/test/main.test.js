/**
 * This file run under jest environment
 */
const {
  describe, test, expect, afterAll,
} = require('@jest/globals');
const { existsSync, unlinkSync, rmSync } = require('fs');
const { join } = require('path');
const { execSync } = require('child_process');
const { ROOT_PATH } = require('./config.cjs');
const { handleTestServer, killPidsOnPorts } = require('./utils/server.cjs');
const startConnection = require('./utils/net/client.cjs');
const { extractStudentFolder } = require('./utils/file.cjs');

const STUDENT_PATH = join(ROOT_PATH, extractStudentFolder());
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const CLIENT_PATH = join(PROJECT_PATH, 'client');
const SERVER_PATH = join(PROJECT_PATH, 'server');

afterAll(async () => {
  await killPidsOnPorts();
});

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
    execSync(`npm install --prefix=${PROJECT_PATH}`);
    expect(existsSync(join(CLIENT_PATH, 'package-lock.json'))).toBe(true);
    expect(existsSync(join(SERVER_PATH, 'package-lock.json'))).toBe(true);
  });
  test(`Must have a "build" script in the package.json of ${PROJECT_PATH} for build the client`, () => {
    expect(require(join(PROJECT_PATH, 'package.json')).scripts).toHaveProperty(
      'build',
    );
    if (existsSync(join(CLIENT_PATH, 'dist'))) {
      rmSync(join(CLIENT_PATH, 'dist'), { recursive: true });
    }
    execSync(`npm run build --prefix=${PROJECT_PATH}`);
    expect(existsSync(join(CLIENT_PATH, 'dist'))).toBe(true);
  });
  test(`Must have a "start" script in the package.json of ${PROJECT_PATH} for start the server`, async () => {
    expect(require(join(PROJECT_PATH, 'package.json')).scripts).toHaveProperty(
      'start',
    );
    await handleTestServer({
      onBeforeStart: null,
      onStarted: async (port) => {
        await startConnection(port);
      },
      onTest: (error) => {
        if (error) {
          expect("Server is not up with 'start' script").toBe(
            "Server is up with 'start' script",
          );
        }
      },
    });
  });
});
