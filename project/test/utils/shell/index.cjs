const { execSync, exec } = require('child_process');
const { join } = require('path');
const {
  LOG_FILE, DEBUG_FILE, ROOT_PATH,
} = require('../../config.cjs');
const { logInFile } = require('../file.cjs');

/**
 * @returns {RegExp}
 */
const getWindowsNetstatParser = () => /TCP[\s]+[\d.]+:([\d]*)[\s]+[\d.:]*[\s]+LISTENING[\s]+([\d]+)/g;

/**
 * @returns {RegExp}
 */
const getLinuxNetstatParser = () => /tcp[0-9\s]+[\d]+[\s]+[\d]+[\s]+[\d.:]+:([\d]*)[\s]+[\d.*:]+[\s]+LISTEN[\s]+([\d]+)\/([\S]+)/g;

/**
 * @param {string} command
 */
const execPromise = (command) => new Promise((resolve, reject) => {
  exec(command, (err, stdout, stderr) => {
    if (err) {
      reject(err);
    } else if (stderr) {
      reject(stderr);
    } else if (stdout) {
      resolve(stdout);
    }
  });
});

/**
 * This function returns all the open ports
 * @return {Promise<Array>}
 */
const portScanner = async (config) => {
  const { port, showName } = config || {};
  const netstat = 'netstat -ano -p tcp';
  const isWin = process.platform === 'win32';
  const stdout = await execPromise(netstat);
  const regex = isWin ? getWindowsNetstatParser() : getLinuxNetstatParser();
  const lines = stdout.matchAll(regex);
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const line of lines) {
    // eslint-disable-next-line no-unused-vars, prefer-const
    let [_, portScanned, pid, name] = line;
    // eslint-disable-next-line eqeqeq
    if (port && port == portScanned) {
      return {
        port, pid, name,
      };
    } if (!result.some((info) => info.pid === pid && info.port === portScanned)) {
      if (showName && !name && pid && isWin) {
        name = '';
        const processNameCommand = 'tasklist';
        const processNameRegex = new RegExp(`(^[\\S]+.exe)[\\s]+${pid}`, 'gm');
        // eslint-disable-next-line no-await-in-loop
        const matches = (await execPromise(processNameCommand)).matchAll(processNameRegex);
        // eslint-disable-next-line no-undef, no-restricted-syntax
        for (const match of matches) {
          // eslint-disable-next-line no-unused-vars
          const [_, processName] = match;
          name += `${processName},`;
        }
        name = name.slice(0, -1);
      }
      result.push({ port: portScanned, pid, name });
    }
  }
  return result;
};
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
  const isWin = process.platform === 'win32';
  const gitBashCommand = (command) => `start /B "" "%PROGRAMFILES%\\Git\\bin\\sh.exe" --login -i -c "${command}" "%~1"`;
  const parsePathGitBash = (command) => command
    .replaceAll('C:', '/c')
    .replaceAll('\\', '/')
    .replaceAll(' ', '\\ ');

  const windowsBackgroundCommand = (command) => {
    const preCommand = `${parsePathGitBash(join(__dirname, 'background.sh'))} -c`;
    const postCommand = `${DEBUG_FILE ? `-o '${
      parsePathGitBash(LOG_FILE.replace(`${ROOT_PATH}\\`, ''))}'` : ''
    }`;
    return gitBashCommand(`${preCommand} '${command}' ${postCommand}`);
  };
  const winCommand = windowsBackgroundCommand(command);

  const linuxCommand = `${join(__dirname, 'background.sh')} -c '${command}' ${DEBUG_FILE ? `-o '${LOG_FILE}'` : ''}`;

  const bgCommand = isWin ? winCommand : linuxCommand;

  return execSync(bgCommand, options).toString();
};

/**
 * This function kill the PID on PORT
 * @return {Promise<void>}
 */
const killPidOnPort = async (port) => {
  if (DEBUG_FILE) {
    logInFile(`Killing PORT=${port}`);
    logInFile(`Scanning PID for PORT=${port}`);
  }
  const scanner = await portScanner({ port });
  if (!scanner) {
    if (DEBUG_FILE) {
      logInFile(`PID not found for PORT=${port}`);
    }
    return;
  }
  const { pid, name } = scanner;
  try {
    if (DEBUG_FILE) {
      logInFile('Port Scanned:');
      logInFile('\t\tport\t\tpid\t\tname');
      logInFile(`\t\t${port}\t\t${pid}\t\t${name}`);
      logInFile(`Killing PID=${pid} with PORT=${port}`);
    }
    process.kill(pid);
  } catch (error) {
    logInFile(`Error Killing PID=${pid} with PORT=${port}: ${error.message}`);
  }
};

module.exports = {
  execBackground, killPidOnPort, portScanner,
};
