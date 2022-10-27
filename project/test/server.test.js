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
const { existsSync, unlinkSync } = require('fs');
const { join } = require('path');
/**
 * Utilities
 */
const startConnection = require('./utils/net/client.cjs');
const sleep = require('./utils/sleep.cjs');
const { killProcess } = require('./utils/shell/index.cjs');
const {
  removeDataInDatabase,
  getAllData,
  makeConnection,
  removeConnection,
} = require('./utils/database.cjs');
const getServer = require('./utils/net/server.cjs');
const { startServer, handleTestServer } = require('./utils/server.cjs');
const { getCurrentBranch } = require('./utils/git.cjs');
/**
 * Configuration
 */
const {
  ROOT_PATH, PORT, TIMEOUT_SERVER, PID_FILE,
} = require('./config.cjs');

const STUDENT_PATH = join(ROOT_PATH, getCurrentBranch());
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
});

/**
 * Suits for testing
 */
describe(`Server Testing in ${SERVER_PATH}`, () => {
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
      await handleTestServer(
        null,
        async () => {
          await startConnection(PORT);
        },
        async (error) => {
          if (error) {
            expect('Server is not using PORT for start up').toBe(
              'Server is using PORT for start up',
            );
          }
        },
      );
    });
    test('Testing server that use the DB_URI environment variable to connect to the database', async () => {
      const DB_PORT = 1111;
      let PID = null;
      let error = null;
      /**
       * @param {Server} server
       */
      const onStart = async (server) => {
        const env = {
          ...process.env,
          DB_URI: `mongodb://localhost:${DB_PORT}`,
        };
        try {
          PID = await startServer(SERVER_PATH, env);
          await sleep(TIMEOUT_SERVER);
        } catch (e) {
          error = e;
        } finally {
          server.close(() => server.unref());
          if (PID) {
            killProcess(PID);
            if (existsSync(PID_FILE)) {
              unlinkSync(PID_FILE);
            }
            expect(
              'Server is not using DB_URI for connection with database',
            ).toBe('Server is using DB_URI for connection with database');
          }
          if (error) {
            expect(error).toBe(null);
          }
        }
      };
      const onConnection = () => {
        if (PID) {
          killProcess(PID);
          if (existsSync(PID_FILE)) {
            unlinkSync(PID_FILE);
          }
          PID = null;
        }
      };
      await getServer(DB_PORT, onStart, onConnection);
    });
  });
  describe('Testing Started Server', () => {
    describe('Testing Connection Database', () => {
      test('Testing Load of Emojis in database', async () => {
        let data = null;
        await handleTestServer(
          async () => {
            await removeDataInDatabase();
          },
          async () => {
            data = await getAllData();
          },
          async () => {
            expect(data?.length > 0).toBe(true);
          },
        );
      });
    });
    describe('Testing Routes in /api/v1', () => {
      test('Testing Cors in responses', async () => {
        let response = null;
        await handleTestServer(
          async () => {
            await removeDataInDatabase();
          },
          async () => {
            response = await get(
              `http://localhost:${PORT}/api/v1/emojis?start=-1&limit=25`,
            );
          },
          async () => {
            expect(response).not.toBe(null);
            expect(response.status).toBe(200);
            expect(response.headers).toHaveProperty(
              'access-control-allow-origin',
            );
          },
        );
      });
      test('GET /api/v1/emojis?start=-1&limit=25', async () => {
        let response = null;
        let dbData = [];
        await handleTestServer(
          async () => {
            await removeDataInDatabase();
          },
          async () => {
            dbData = (await getAllData())?.shift();
            response = await get(
              `http://localhost:${PORT}/api/v1/emojis?start=-1&limit=25`,
            );
          },
          async () => {
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
        );
      });
      test('GET /api/v1/emojis/:id', async () => {
        let response = null;
        let dbData = [];
        let randomIndex = null;
        let emoji = null;
        await handleTestServer(
          async () => {
            await removeDataInDatabase();
          },
          async () => {
            dbData = (await getAllData())?.shift();
            randomIndex = Number.parseInt(
              Math.random() * (+dbData.length - 1),
              10,
            );
            emoji = dbData[randomIndex];
            response = await get(
              `http://localhost:${PORT}/api/v1/emojis/${emoji?._id}`,
            );
          },
          async () => {
            expect(response).not.toBe(null);
            expect(response.status).toBe(200);
            const { data } = response;
            expect(data).toHaveProperty('result');
            expect(data?.result).toHaveProperty('name');
            expect(data?.result?.name).toBe(emoji?.name);
          },
        );
      });

      test('POST /api/v1/votes', async () => {
        let response = null;
        let dbData = [];
        let randomIndex = null;
        let emoji = null;
        await handleTestServer(
          async () => {
            await removeDataInDatabase();
          },
          async () => {
            dbData = (await getAllData())?.shift();
            randomIndex = Number.parseInt(
              Math.random() * (+dbData.length - 1),
              10,
            );
            emoji = dbData[randomIndex];
            response = await post(`http://localhost:${PORT}/api/v1/votes`, {
              id: emoji?._id,
            });
          },
          async () => {
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
        );
      });
    });
  });
});
