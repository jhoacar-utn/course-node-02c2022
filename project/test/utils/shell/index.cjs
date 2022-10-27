const { execSync, exec } = require("child_process");
const { LOG_FILE } = require("../../config.cjs");

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
  const bgCommand = `${__dirname}/background.sh -c '${command}' -o ${LOG_FILE}`;
  return execSync(bgCommand, options).toString();
};
/**
 * This function kill a process using his pid
 * @param {number} pid
 */
const killProcess = (pid) => {
  exec(`kill ${pid}`);
};

module.exports = { execBackground, killProcess };
