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
const {
  yellow, green, bold, red, cyan,
} = require('colors');
const startConnection = require('./utils/net/client.cjs');
const {
  removeDataInDatabase,
  getAllData,
  makeConnection,
  removeConnection,
} = require('./utils/database.cjs');
const FakeServerEventEmitter = require('./utils/net/server.cjs');
const { ServerEventEmitter } = require('./utils/server.cjs');
const { extractStudentFolder } = require('./utils/file.cjs');
/**
 * Configuration
 */
const {
  ROOT_PATH, TIMEOUT_SERVER, DB_URI, DEBUG_TEST,
} = require('./config.cjs');
const { killPidsOnPorts } = require('./utils/shell/index.cjs');

const STUDENT_FOLDER = extractStudentFolder();

if (!STUDENT_FOLDER) {
  throw new Error(red('The student folder doesn\'t exists'));
}

const STUDENT_PATH = join(ROOT_PATH, STUDENT_FOLDER);
const PROJECT_PATH = join(STUDENT_PATH, 'project');
const SERVER_PATH = join(PROJECT_PATH, 'server');

if (!existsSync(SERVER_PATH)) {
  red(`${bold('server')} folder in ${PROJECT_PATH} is required`);
  throw new Error(red(`${bold('server')} folder in ${PROJECT_PATH} is required`));
}

/**
 * Before all tests
 * We need to install all dependecies
 */
beforeAll(async () => {
  if (!existsSync(join(SERVER_PATH, 'node_modules'))) {
    if (DEBUG_TEST) {
      process.stdout.write(bold('Installing Server Dependencies - '));
    }
    execSync(`cd ${SERVER_PATH} && npm i .`);
    if (DEBUG_TEST) {
      process.stdout.write(green('Installed\n\n'));
    }
  }
  if (DEBUG_TEST) {
    process.stdout.write(bold(`Initializating connection using: ${yellow(DB_URI)} - `));
  }
  await removeConnection();
  await makeConnection();
  if (DEBUG_TEST) {
    process.stdout.write(green('connection established\n\n'));
  }
});
/**
 * After all tests
 * We need to remove all information in database
 * and close mongodb connection
 */
afterAll(async () => {
  if (DEBUG_TEST) {
    process.stdout.write(bold(`Erasing all in the database using: ${yellow(DB_URI)} - `));
  }
  await removeDataInDatabase();
  if (DEBUG_TEST) {
    process.stdout.write(green('erased\n\n'));
  }
  await removeConnection();
  await killPidsOnPorts();
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

    test('Must have a script called "start" and must be "node src"', () => {
      expect(require(`${SERVER_PATH}/package.json`).scripts).toHaveProperty(
        'start',
      );
      expect(require(`${SERVER_PATH}/package.json`).scripts.start).toBe(
        'node src',
      );
    });

    test('Must have a folder "src" with an "index.js" to start the server', () => {
      expect(existsSync(join(SERVER_PATH, 'src'))).toBe(true);
      expect(existsSync(join(SERVER_PATH, 'src', 'index.js'))).toBe(true);
    });
  });

  describe('Testing StartUp Server', () => {
    test('Testing server that listen on PORT environment variable', async () => {
      const server = new ServerEventEmitter();

      server.on('beforeStart', async () => `${bold(`${cyan('Testing server that listen on PORT environment variable')}\n\n`)}`);
      server.on('beforeStart', async () => `- Executing ${yellow('npm start')} on ${bold(SERVER_PATH)}\n\n`);
      server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds to start connection with the server\n\n`);

      server.on('start', async (port) => `Making connection on port ${yellow(port)}: `);
      server.on('start', async (port) => { await startConnection(port); });
      server.on('start', async (port) => green(`- Connection made on the port ${yellow(port)}\n\n`));

      server.on('error', async (error) => console.error(error));
      server.on('error', async (error) => expect(error).toBe(null));

      server.on('end', killPidsOnPorts);
      server.on('end', async () => cyan(bold('Test finished\n\n')));

      await server.start();
    }, TIMEOUT_SERVER * 2 * 1000);

    test('Testing server that use the DB_URI environment variable to connect to the database', async () => {
      const DB_PORT = 1111;
      const FAKE_DB_URI = `mongodb://localhost:${DB_PORT}`;
      const env = {
        ...process.env,
        DB_URI: FAKE_DB_URI,
      };

      let connection = false;

      const fakeServer = new FakeServerEventEmitter();

      fakeServer.on('beforeStart', async () => `${bold(`${cyan('Testing server that use the DB_URI environment variable to connect to the database')}\n\n`)}`);
      fakeServer.on('beforeStart', async () => `- Initializing ${yellow('fake')} database server on port ${yellow(DB_PORT)}: `);

      fakeServer.on('start', async () => green('fake server initialized successfully\n\n'));
      fakeServer.on('start', async (fakeServer) => {
        const server = new ServerEventEmitter();

        server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds for the server to connect to the database with ${yellow(`DB_URI=${bold(FAKE_DB_URI)}`)}\n\n`);
        server.on('start', async (port) => `- Timeout for server successfully completed on port ${yellow(port)}\n\n`);
        server.on('start', async () => {
          if (!connection) {
            throw new Error(red(`The timeout for the server has expired and the connection to the database with ${bold(FAKE_DB_URI)} has not been received`));
          }
        });

        server.on('error', async () => fakeServer.close(() => fakeServer.unref()));
        server.on('error', async (error) => console.error(error));
        server.on('error', async (error) => expect(error).toBe(null));

        server.on('end', killPidsOnPorts);
        server.on('end', async () => cyan(bold('Test finished\n\n')));

        await server.start(env);
      });

      fakeServer.on('connection', async (socket) => green(`- Connection received on port ${yellow(DB_PORT)} from ${bold(`${socket.remoteAddress}:${socket.remotePort}`)}\n\n`));
      fakeServer.on('connection', async () => { connection = true; });

      await fakeServer.start(DB_PORT);
    }, TIMEOUT_SERVER * 2 * 1000);
  });

  describe('Testing Started Server', () => {
    describe('Testing Connection Database', () => {
      test('Testing Load of Emojis in database', async () => {
        let data = null;
        const server = new ServerEventEmitter();

        server.on('beforeStart', async () => `${bold(`${cyan('Testing Load of Emojis in database')}\n\n`)}`);
        server.on('beforeStart', async () => `- Erasing all the data from the database on ${yellow(bold(DB_URI))} - `);
        server.on('beforeStart', async () => { await removeDataInDatabase(); });
        server.on('beforeStart', async () => green('erased\n\n'));
        server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds for the server to connect to the the database and load all the emojis\n\n`);

        server.on('start', async (port) => `- Timeout for server successfully completed on port ${yellow(port)}\n\n`);
        server.on('start', async () => `- Extracting all the data from the database on ${yellow(bold(DB_URI))} - `);
        server.on('start', async () => { data = await getAllData(); });
        server.on('start', async () => green('extracted\n\n'));
        server.on('start', async () => `- Length of the collections on database: ${green(data.length)}\n\n`);

        server.on('error', async (error) => console.error(error));
        server.on('error', async (error) => expect(error).toBe(null));

        server.on('end', killPidsOnPorts);
        server.on('end', () => { expect(data?.length > 0).toBe(true); });
        server.on('end', async () => cyan(bold('Test finished\n\n')));

        await server.start();
      }, TIMEOUT_SERVER * 2 * 1000);
    });
    describe('Testing Routes in /api/v1', () => {
      test('Testing Cors in responses - Must send the "access-control-allow-origin" header', async () => {
        let response = null;
        const endpoint = (port) => `http://localhost:${port}/api/v1/emojis`;
        const server = new ServerEventEmitter();

        server.on('beforeStart', async () => `${bold(`${cyan('Testing Cors in responses - Must send the "access-control-allow-origin" header')}\n\n`)}`);
        server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds for the server is up\n\n`);

        server.on('start', async (port) => `- Sending GET request to ${yellow(endpoint(port))} - `);
        server.on('start', async (port) => { response = await get(endpoint(port)); });
        server.on('start', async () => green('request sent\n\n'));
        server.on('start', async () => `- Content of the headers:\n\n${green(JSON.stringify(response?.headers || {}))}\n\n`);
        server.on('error', async (error) => console.error(error));
        server.on('error', async (error) => expect(error).toBe(null));

        server.on('end', killPidsOnPorts);
        server.on('end', async () => {
          expect(response).not.toBe(null);
          expect(response.status).toBe(200);
          expect(response.headers).toHaveProperty(
            'access-control-allow-origin',
          );
        });
        server.on('end', async () => cyan(bold('Test finished\n\n')));

        await server.start();
      }, TIMEOUT_SERVER * 2 * 10000);

      test('GET /api/v1/emojis?start=-1&limit=25 - Must return 10 emojis', async () => {
        let response = null;
        let dbData = [];
        const endpoint = (port) => `http://localhost:${port}/api/v1/emojis?start=-1&limit=25`;
        const server = new ServerEventEmitter();

        server.on('beforeStart', async () => `${bold(`${cyan('GET /api/v1/emojis?start=-1&limit=25 - Must return 10 emojis')}\n\n`)}`);
        server.on('beforeStart', async () => `- Erasing all the data from the database on ${yellow(bold(DB_URI))} - `);
        server.on('beforeStart', async () => { await removeDataInDatabase(); });
        server.on('beforeStart', async () => green('erased\n\n'));
        server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds for the server to connect to the the database and load all the emojis\n\n`);

        server.on('start', async (port) => `- Timeout for server successfully completed on port ${yellow(port)}\n\n`);
        server.on('start', async () => `- Extracting all the data from the database on ${yellow(bold(DB_URI))} - `);
        server.on('start', async () => { dbData = (await getAllData())?.shift(); });
        server.on('start', async () => green('extracted\n\n'));
        server.on('start', async () => `- Length of the database: ${green(JSON.stringify(dbData?.length))}\n\n`);
        server.on('start', async () => `- Name of the first Emoji: ${green(JSON.stringify(dbData?.slice()?.shift()?.name || {}))}\n\n`);
        server.on('start', async (port) => `- Sending GET request to ${endpoint(port)} - `);
        server.on('start', async (port) => { response = await get(endpoint(port)); });
        server.on('start', async () => green('request sent\n\n'));
        server.on('start', async () => `- Length of the result of the response: ${green(JSON.stringify(response?.data?.result?.length || {}))}\n\n`);
        server.on('start', async () => `- Name  of the first Emoji of the result of the response: ${green(JSON.stringify(response?.data?.result?.slice()?.shift()?.name || {}))}\n\n`);

        server.on('error', async (error) => console.error(error));
        server.on('error', async (error) => expect(error).toBe(null));

        server.on('end', killPidsOnPorts);
        server.on('end', async () => {
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
        });
        server.on('end', async () => cyan(bold('Test finished\n\n')));

        await server.start();
      }, TIMEOUT_SERVER * 2 * 1000);

      test('GET /api/v1/emojis/:id - Must return the emoji by id', async () => {
        let response = null;
        let dbData = [];
        let randomIndex = null;
        let emoji = null;
        const endpoint = (port, id) => `http://localhost:${port}/api/v1/emojis/${id}`;
        const server = new ServerEventEmitter();

        server.on('beforeStart', async () => `${bold(`${cyan('GET /api/v1/emojis/:id - Must return the emoji by id')}\n\n`)}`);
        server.on('beforeStart', async () => `- Erasing all the data from the database on ${yellow(bold(DB_URI))} - `);
        server.on('beforeStart', async () => { await removeDataInDatabase(); });
        server.on('beforeStart', async () => green('erased\n\n'));
        server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds for the server to connect to the the database and load all the emojis\n\n`);

        server.on('start', async (port) => `- Timeout for server successfully completed on port ${yellow(port)}\n\n`);
        server.on('start', async () => `- Extracting the emoji from the database on ${yellow(bold(DB_URI))} - `);
        server.on('start', async () => {
          dbData = (await getAllData())?.shift();
          randomIndex = Number.parseInt(
            Math.random() * (+dbData.length - 1),
            10,
          );
          emoji = dbData[randomIndex];
        });
        server.on('start', async () => green('extracted\n\n'));
        server.on('start', async () => `- Content of the emoji: \n\n${green(JSON.stringify(emoji || {}))}\n\n`);
        server.on('start', async (port) => `- Sending GET request to ${endpoint(port, emoji?._id)} - `);
        server.on('start', async (port) => { response = await get(endpoint(port, emoji?._id)); });
        server.on('start', async () => green('request sent\n\n'));
        server.on('start', async () => `- Content of the response: \n\n${green(JSON.stringify(response?.data?.result || {}))}\n\n`);
        server.on('error', async (error) => console.error(error));
        server.on('error', async (error) => expect(error).toBe(null));

        server.on('end', killPidsOnPorts);
        server.on('end', async () => {
          expect(response).not.toBe(null);
          expect(response.status).toBe(200);
          const { data } = response;
          expect(data).toHaveProperty('result');
          expect(data?.result).toHaveProperty('name');
          expect(data?.result?.name).toBe(emoji?.name);
        });
        server.on('end', async () => cyan(bold('Test finished\n\n')));

        await server.start();
      }, TIMEOUT_SERVER * 2 * 1000);
      test('POST /api/v1/votes - Must increment in one the vote of the emoji sent in the body of the request using his id', async () => {
        let response = null;
        let dbData = [];
        let randomIndex = null;
        let emoji = null;
        const endpoint = (port) => `http://localhost:${port}/api/v1/votes`;
        const server = new ServerEventEmitter();

        server.on('beforeStart', async () => `${bold(`${cyan('POST /api/v1/votes - Must increment in one the vote of the emoji sent in the body of the request using his id')}\n\n`)}`);
        server.on('beforeStart', async () => `- Erasing all the data from the database on ${yellow(bold(DB_URI))} - `);
        server.on('beforeStart', async () => { await removeDataInDatabase(); });
        server.on('beforeStart', async () => green('erased\n\n'));
        server.on('beforeStart', async () => `- Waiting ${yellow(TIMEOUT_SERVER)} seconds for the server to connect to the the database and load all the emojis\n\n`);

        server.on('start', async (port) => `- Timeout for server successfully completed on port ${yellow(port)}\n\n`);
        server.on('start', async () => `- Extracting the emoji from the database on ${yellow(bold(DB_URI))} - `);
        server.on('start', async () => {
          dbData = (await getAllData())?.shift();
          randomIndex = Number.parseInt(
            Math.random() * (+dbData.length - 1),
            10,
          );
          emoji = dbData[randomIndex];
        });
        server.on('start', async () => green('extracted\n\n'));
        server.on('start', async () => `- Content of the emoji: \n\n${green(JSON.stringify(emoji || {}))}\n\n`);
        server.on('start', async (port) => `- Sending POST request to ${endpoint(port)} using with body request { id: ${emoji?._id} } - `);
        server.on('start', async (port) => { response = await post(endpoint(port), { id: emoji?._id }); });
        server.on('start', async () => green('request sent\n\n'));
        server.on('start', async () => `- Content of the response: \n\n${green(JSON.stringify(response?.data?.result || {}))}\n\n`);

        server.on('error', async (error) => console.error(error));
        server.on('error', async (error) => expect(error).toBe(null));

        server.on('end', killPidsOnPorts);
        server.on('end', async () => {
          expect(response).not.toBe(null);
          expect(response.status).toBe(200);
          const { data } = response;
          expect(data).toHaveProperty('result');
          expect(data?.result).toHaveProperty('name');
          expect(data?.result?.votes).toBe(+emoji.votes + 1);
          if (DEBUG_TEST) {
            process.stdout.write(`- Extracting the emoji from the database on ${yellow(bold(DB_URI))} - `);
          }
          const dbDataUpdate = (await getAllData())
            ?.shift()
            ?.sort((a, b) => a.votes - b.votes);
          const sameEmoji = dbDataUpdate?.pop();
          if (DEBUG_TEST) {
            process.stdout.write(green('extracted\n\n'));
            process.stdout.write(`${green(JSON.stringify(sameEmoji || {}))}\n\n`);
          }
          expect({ ...emoji, votes: emoji.votes + 1 }).toStrictEqual(
            sameEmoji,
          );
        });
        server.on('end', async () => cyan(bold('Test finished\n\n')));

        await server.start();
      }, TIMEOUT_SERVER * 2 * 1000);
    });
  });
});
