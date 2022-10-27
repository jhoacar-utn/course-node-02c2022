const { resolve, join } = require("path");

// const { fileURLToPath } = require("url");
// const __dirname = fileURLToPath(new URL(".", import.meta?.url));

if (!process.env.PORT) {
  process.env.PORT = 5050;
}
if (!process.env.DB_URI) {
  process.env.DB_URI = "mongodb://root:root@localhost";
}

const ROOT_PATH = resolve(join(__dirname, "/../../"));
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;
const TIMEOUT_SERVER = process.env.TIMEOUT_SERVER || 2;
const TIMEOUT_CLIENT = process.env.TIMEOUT_CLIENT || 1;
const LOG_FILE = resolve(join(__dirname, "debug.txt"));
const PID_FILE = resolve(join(__dirname, "pid.txt"));
const ENVIRONMENT_FILE = resolve(join(__dirname, "done.txt"));

const OBJECT = {
  ROOT_PATH,
  PORT,
  DB_URI,
  TIMEOUT_SERVER,
  TIMEOUT_CLIENT,
  LOG_FILE,
  PID_FILE,
  ENVIRONMENT_FILE,
};
module.exports = OBJECT;
module.exports.config = OBJECT;
