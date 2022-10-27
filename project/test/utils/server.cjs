const { readFileSync, writeFileSync, unlinkSync, existsSync } = require("fs");
const { join } = require("path");
const { getCurrentBranch } = require("./git.cjs");
const { ROOT_PATH, TIMEOUT_SERVER, PID_FILE } = require("../config.cjs");
const { execBackground, killProcess } = require("./shell/index.cjs");
const sleep = require("./sleep.cjs");

const STUDENT_PATH = join(ROOT_PATH, getCurrentBranch());
const PROJECT_PATH = join(STUDENT_PATH, "project");
const SERVER_PATH = join(PROJECT_PATH, "server");
const JSON_FILE = "package.json";
const COMMAND_PID = `echo $$ > ${PID_FILE}`;
const TIMEOUT_SCRIPT = 0.5;
/**
 * This function adapt the "package.json" for get PID
 * This function add a new command in 'start' script
 * to save the PID in a file
 * Returns the content of the old "package.json"
 * @param {string} path
 * @return {string}
 */
const adaptPackageJSON = (path) => {
  const content = readFileSync(join(path, JSON_FILE)).toString();
  const parsed = JSON.parse(content);
  writeFileSync(
    join(path, JSON_FILE),
    JSON.stringify({
      ...parsed,
      scripts: {
        ...parsed.scripts,
        start: `${COMMAND_PID};${parsed.scripts.start}`,
      },
    })
  );
  return content;
};
/**
 * This function restore the content in "package.json"
 * @param {string} path
 * @param {string} content
 */
const restorePackageJSON = (path, content) => {
  writeFileSync(join(path, JSON_FILE), content);
};
/**
 * This function returns the PID saved in the file
 * @return {number}
 */
const getPID = () => {
  const PID = +readFileSync(PID_FILE).toString() + 1;
  return PID;
};
/**
 * This function execute the "start" command
 * in specific folder
 * @param {string} path
 */
const executeStartCommand = (path, env) => {
  execBackground(`npm start --prefix=${path}`, { env });
};
/**
 * This function execute 'npm start' in specific folder
 * and return the PID for the process running in background
 * @param {string} path
 * @param {object} env
 * @return {Promise<number>}
 */
const startServer = async (path, env) => {
  const content = adaptPackageJSON(path);
  executeStartCommand(path, env);
  await sleep(TIMEOUT_SCRIPT);
  restorePackageJSON(path, content);
  return getPID();
};
/**
 * Util function for start the server and
 * execute functions that use his flow
 * @param {()=>Promise<void>} onBeforeStart
 * @param {()=>Promise<void>} onStarted
 * @param {(error: Error)=>Promise<void>} onTest
 */
const handleTestServer = async (onBeforeStart, onStarted, onTest) => {
  let PID = null;
  let error = null;
  try {
    if (onBeforeStart) {
      await onBeforeStart();
    }
    PID = await startServer(SERVER_PATH, process.env);
    await sleep(TIMEOUT_SERVER);
    if (onStarted) {
      await onStarted();
    }
  } catch (e) {
    error = e;
  } finally {
    if (PID) {
      killProcess(PID);
      if (existsSync(PID_FILE)) {
        unlinkSync(PID_FILE);
      }
    }
    if (error) {
      expect(error).toBe(null);
    }
    if (onTest) {
      await onTest(error);
    }
  }
};

module.exports = { handleTestServer, startServer };
