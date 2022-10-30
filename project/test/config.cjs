const { resolve, join } = require('path');

if (!process.env.PORT) {
  process.env.PORT = 5050;
}
if (!process.env.DB_URI) {
  process.env.DB_URI = 'mongodb://root:root@localhost';
}

const ROOT_PATH = resolve(join(__dirname, '/../../'));
const { PORT } = process.env;
const { DB_URI } = process.env;

const TIMEOUT_VALIDATION = process.env.TIMEOUT_VALIDATION || 3000;
const TIMEOUT_SERVER = process.env.TIMEOUT_SERVER || 2;
const TIMEOUT_CLIENT = process.env.TIMEOUT_CLIENT || 1;

const DEBUG_TEST = process.env.DEBUG_TEST || false;
const MINIMAL_PORT = process.env.MINIMAL_PORT || 3000;

const LOG_FILE = resolve(join(__dirname, '/logs/debug.txt'));
const PID_FILE = resolve(join(__dirname, '/logs/pid.txt'));
const PORTS_FILE = resolve(join(__dirname, '/logs/ports.json'));
const ENVIRONMENT_FILE = resolve(join(__dirname, '/logs/done.txt'));

const OBJECT = {
  ROOT_PATH,
  PORT,
  DB_URI,
  TIMEOUT_VALIDATION,
  TIMEOUT_SERVER,
  TIMEOUT_CLIENT,
  MINIMAL_PORT,
  LOG_FILE,
  PID_FILE,
  PORTS_FILE,
  ENVIRONMENT_FILE,
  DEBUG_TEST,
};
module.exports = OBJECT;
module.exports.config = OBJECT;
