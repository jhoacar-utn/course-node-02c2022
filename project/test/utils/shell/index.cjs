const { execSync, exec } = require('child_process');
const { LOG_FILE, DEBUG_FILE } = require('../../config.cjs');

/**
 * This function execute a command in background and return
 * his process id.
 * It is important to kill the process
 * as it causes resource consumption by zombie processes
 * @param {string} command
 * @param {ExecSyncOptions} options
 * @return {string}
 */
const execBackground = (command, options) => {
  const bgCommand = `${__dirname}/background.sh -c '${command}' ${DEBUG_FILE ? `-o ${LOG_FILE}` : ''}`;
  return execSync(bgCommand, options).toString();
};
/**
 * This function kill a process using his pid
 * @param {number} pid
 * @return {Promise<void>}
 */
const killProcess = (pid) => new Promise((resolve) => {
  exec(`kill ${pid}`, (error, stdout, stderr) => {
    if (error) {
      resolve(error);
    } else if (stdout || stderr) {
      resolve(stdout + stderr);
    } else {
      resolve('done');
    }
  });
});

module.exports = { execBackground, killProcess };
