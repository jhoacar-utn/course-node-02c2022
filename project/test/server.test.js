/* globals jest */
/**
 * This file run under jest environment
 */
const {
  describe,
  test,
  expect,
  beforeAll,
  afterAll,
} = require('@jest/globals');
const { get, post } = require('axios');
const { execSync } = require('child_process');
const { existsSync } = require('fs');
const { join } = require('path');
/**
 * Utilities
 */
const startConnection = require('./utils/net/client.cjs');
const { killProcess } = require('./utils/shell/index.cjs');
const {
  removeDataInDatabase,
  getAllData,
  makeConnection,
  removeConnection,
} = require('./utils/database.cjs');
const getServer = require('./utils/net/server.cjs');
const { handleTestServer, killPidsOnPorts } = require('./utils/server.cjs');
const { extractStudentFolder } = require('./utils/file.cjs');
/**
 * Configuration
 */
const { ROOT_PATH } = require('./config.cjs');

const STUDENT_PATH = join(ROOT_PATH, extractStudentFolder());
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const SERVER_PATH = join(PROJECT_PATH, 'server');

if (!existsSync(SERVER_PATH)) {
  throw new Error(`"server" folder in ${PROJECT_PATH} is required`);
}
/**
 * Before all tests
 * We need to install all dependecies
 */
beforeAll(async () => {
  if (!existsSync(join(SERVER_PATH, 'node_modules'))) {
    console.log('Installing Server Dependecies');
    execSync(`cd ${SERVER_PATH} && npm i .`);
  }
  await removeConnection();
  await makeConnection();
});
/**
 * After all tests
 * We need to remove all information in database
 * and close mongodb connection
 */
afterAll(async () => {
  await removeDataInDatabase();
  await removeConnection();
  await killPidsOnPorts();
});

/**
 * Suits for testing
 */
describe(`Server Testing in ${SERVER_PATH}`, () => {
  jest.setTimeout(120000);
  describe('Testing structure and files', () => {
    test('Must have a package.json and a property called "dependencies"', () => {
      expect(require(`${SERVER_PATH}/package.json`)).toHaveProperty(
        'dependencies',
      );
    });

    test('Must have a script to start', () => {
      expect(require(`${SERVER_PATH}/package.json`).scripts).toHaveProperty(
        'start',
      );
    });
    test('Must have a property "main" with the main file in package.json or contain an index.js file', () => {
      expect(
        existsSync(join(SERVER_PATH, 'index.js'))
        || existsSync(join(SERVER_PATH, 'src', 'index.js'))
        || require(`${SERVER_PATH}/package.json`)?.main?.length > 0,
      ).toBe(true);
    });
  });

  describe('Testing StartUp Server', () => {
    test('Testing server that listen on PORT environment variable', async () => {
      await handleTestServer({
        onBeforeStart: null,
        onStarted: async (port) => {
          await startConnection(port);
        },
        onTest: async (error) => {
          if (error) {
            expect('Server is not using PORT for start up').toBe(
              'Server is using PORT for start up',
            );
          }
        },
      });
    });
    test('Testing server that use the DB_URI environment variable to connect to the database', async () => {
      const DB_PORT = 1111;
      let pid = null;
      /**
       * @param {Server} server
       */
      const onStart = async (server) => {
        const env = {
          ...process.env,
          DB_URI: `mongodb://localhost:${DB_PORT}`,
        };

        await handleTestServer({
          onBeforeStart: null,
          onStarted: async (portServer, pidServer) => {
            pid = pidServer;
          },
          onTest: async (e) => {
            server.close(() => server.unref());
            if (e) {
              expect(
                'Server is not using DB_URI for connection with database',
              ).toBe('Server is using DB_URI for connection with database');
              expect(e).toBe(null);
            }
          },
          env,
        });
      };
      const onConnection = async () => {
        if (pid) {
          await killProcess(pid);
        }
      };
      await getServer(DB_PORT, onStart, onConnection);
    });
  });
  describe('Testing Started Server', () => {
    describe('Testing Connection Database', () => {
      test('Testing Load of Emojis in database', async () => {
        let data = null;
        await handleTestServer({
          onBeforeStart: async () => {
            await removeDataInDatabase();
          },
          onStarted: async () => {
            data = await getAllData();
          },
          onTest: async () => {
            expect(data?.length > 0).toBe(true);
          },
          timeoutServer: 3,
        });
      });
    });
    describe('Testing Routes in /api/v1', () => {
      test('Testing Cors in responses', async () => {
        let response = null;
        await handleTestServer({
          onBeforeStart: async () => {
            await removeDataInDatabase();
          },
          onStarted: async (port) => {
            response = await get(
              `http://localhost:${port}/api/v1/emojis?start=-1&limit=25`,
            );
          },
          onTest: async () => {
            expect(response).not.toBe(null);
            expect(response.status).toBe(200);
            expect(response.headers).toHaveProperty(
              'access-control-allow-origin',
            );
          },
        });
      });
      test('GET /api/v1/emojis?start=-1&limit=25', async () => {
        let response = null;
        let dbData = [];
        await handleTestServer({
          onBeforeStart: async () => {
            await removeDataInDatabase();
          },
          onStarted: async (port) => {
            dbData = (await getAllData())?.shift();
            response = await get(
              `http://localhost:${port}/api/v1/emojis?start=-1&limit=25`,
            );
          },
          onTest: async () => {
            expect(response).not.toBe(null);
            expect(response.status).toBe(200);
            const { data } = response;
            expect(data).toHaveProperty('total');
            expect(data?.total).toBe(dbData?.length);
            expect(data).toHaveProperty('result');
            expect(data?.result).toHaveLength(10);
            expect(data?.result?.shift()?.name).toBe(
              dbData?.slice()?.shift()?.name,
            );
          },
          timeoutServer: 3,
        });
      });
      test('GET /api/v1/emojis/:id', async () => {
        let response = null;
        let dbData = [];
        let randomIndex = null;
        let emoji = null;
        await handleTestServer({
          onBeforeStart: async () => {
            await removeDataInDatabase();
          },
          onStarted: async (port) => {
            dbData = (await getAllData())?.shift();
            randomIndex = Number.parseInt(
              Math.random() * (+dbData.length - 1),
              10,
            );
            emoji = dbData[randomIndex];
            response = await get(
              `http://localhost:${port}/api/v1/emojis/${emoji?._id}`,
            );
          },
          onTest: async () => {
            expect(response).not.toBe(null);
            expect(response.status).toBe(200);
            const { data } = response;
            expect(data).toHaveProperty('result');
            expect(data?.result).toHaveProperty('name');
            expect(data?.result?.name).toBe(emoji?.name);
          },
          timeoutServer: 3,
        });
      });
      test('POST /api/v1/votes', async () => {
        let response = null;
        let dbData = [];
        let randomIndex = null;
        let emoji = null;
        await handleTestServer(
          {
            onBeforeStart: async () => {
              await removeDataInDatabase();
            },
            onStarted: async (port) => {
              dbData = (await getAllData())?.shift();
              randomIndex = Number.parseInt(
                Math.random() * (+dbData.length - 1),
                10,
              );
              emoji = dbData[randomIndex];
              response = await post(`http://localhost:${port}/api/v1/votes`, {
                id: emoji?._id,
              });
            },
            onTest: async () => {
              expect(response).not.toBe(null);
              expect(response.status).toBe(200);
              const { data } = response;
              expect(data).toHaveProperty('result');
              expect(data?.result).toHaveProperty('name');
              expect(data?.result?.votes).toBe(+emoji.votes + 1);
              const dbDataUpdate = (await getAllData())
                ?.shift()
                ?.sort((a, b) => a.votes - b.votes);
              const sameEmoji = dbDataUpdate?.pop();
              expect({ ...emoji, votes: emoji.votes + 1 }).toStrictEqual(
                sameEmoji,
              );
            },
            timeoutServer: 4,
          },
        );
      });
    });
  });
});
