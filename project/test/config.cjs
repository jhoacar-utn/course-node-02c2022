const { resolve, join } = require('path');

// const { fileURLToPath } = require("url");
// const __dirname = fileURLToPath(new URL(".", import.meta?.url));

if (!process.env.PORT) {
  process.env.PORT = 5050;
}
if (!process.env.DB_URI) {
  process.env.DB_URI = 'mongodb://root:root@localhost';
}

const ROOT_PATH = resolve(join(__dirname, '/../../'));
const { PORT } = process.env;
const { DB_URI } = process.env;

const TIMEOUT_SCRIPT = process.env.TIMEOUT_SCRIPT || 1;
const TIMEOUT_SERVER = process.env.TIMEOUT_SERVER || 2;
const TIMEOUT_CLIENT = process.env.TIMEOUT_CLIENT || 1;

const MINIMAL_PORT = process.env.MINIMAL_PORT || 3000;

const LOG_FILE = resolve(join(__dirname, '/logs/debug.txt'));
const PID_FILE = resolve(join(__dirname, '/logs/pid.txt'));
const PORTS_FILE = resolve(join(__dirname, '/logs/ports.json'));
const ENVIRONMENT_FILE = resolve(join(__dirname, '/logs/done.txt'));

const OBJECT = {
  ROOT_PATH,
  PORT,
  DB_URI,
  TIMEOUT_SCRIPT,
  TIMEOUT_SERVER,
  TIMEOUT_CLIENT,
  MINIMAL_PORT,
  LOG_FILE,
  PID_FILE,
  PORTS_FILE,
  ENVIRONMENT_FILE,
};
module.exports = OBJECT;
module.exports.config = OBJECT;
