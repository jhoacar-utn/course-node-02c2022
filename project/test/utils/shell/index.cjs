const { execSync, exec } = require('child_process');
const { unlinkSync, existsSync, writeFileSync } = require('fs');
const { join } = require('path');
const {
  LOG_FILE, DEBUG_FILE, PORTS_FILE, CONFIG_PATH,
} = require('../../config.cjs');
const { logInFile } = require('../file.cjs');

/**
 * @returns {RegExp}
 */
const getWindowsNetstatParser = () => /TCP[\s]+[\d.]+:([\d]*)[\s]+[\d.:]*[\s]+LISTENING[\s]+([\d]+)/g;

/**
 * @returns {RegExp}
 */
const getLinuxNetstatParser = () => /tcp[\s]+[\d]+[\s]+[\d]+[\s]+[\d.]+:([\d]*)[\s]+[\d.*:]+[\s]+LISTEN[\s]+([\d]+)\/([\S]+)/g;

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
const portScanner = async () => {
  const netstat = 'netstat -ano -p tcp';
  const isWin = process.platform === 'win32';
  const stdout = await execPromise(netstat);
  const regex = isWin ? getWindowsNetstatParser() : getLinuxNetstatParser();
  const lines = stdout.matchAll(regex);
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const line of lines) {
    // eslint-disable-next-line no-unused-vars, prefer-const
    let [_, port, pid, name] = line;
    if (!result.some((info) => info.pid === pid && info.port === port)) {
      if (!name && pid && isWin) {
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
      result.push({ port, pid, name });
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
    const postCommand = `${DEBUG_FILE ? `-o 'project/test/${
      parsePathGitBash(LOG_FILE.replace(CONFIG_PATH, '').replace('\\', ''))}'` : ''
    }`;
    return gitBashCommand(`${preCommand} '${command}' ${postCommand}`);
  };
  const winCommand = windowsBackgroundCommand(command);

  const linuxCommand = `${join(__dirname, 'background.sh')} -c '${command}' ${DEBUG_FILE ? `-o '${LOG_FILE}'` : ''}`;

  const bgCommand = isWin ? winCommand : linuxCommand;

  return execSync(bgCommand, options).toString();
};

/**
 * This function load port used
 * @param {string} port
 */
const loadPort = (port) => {
  if (!port) {
    return;
  }
  if (!existsSync(PORTS_FILE)) {
    writeFileSync(PORTS_FILE, '[]');
  }
  const content = require(PORTS_FILE);
  content.push(port);
  writeFileSync(PORTS_FILE, JSON.stringify(content));
};

/**
 * This function kill all PID on PORTS
 * @return {Promise<void>}
 */
const killPidsOnPorts = async () => {
  if (!existsSync(PORTS_FILE)) {
    return null;
  }
  const ports = require(PORTS_FILE);
  if (DEBUG_FILE) {
    logInFile(`Killing all these ports: ${ports.join(',')}`);
    logInFile('Scanning all ports:');
  }

  const scanner = await portScanner();
  // eslint-disable-next-line no-restricted-syntax
  if (DEBUG_FILE) {
    logInFile('Port Scanner:');
    logInFile('\t\tport\t\tpid\t\tname');
    scanner?.map((object) => logInFile(`\t\t${object.port}\t\t${object.pid}\t\t${object.name}`));
  }

  ports?.map((port) => {
    // eslint-disable-next-line eqeqeq
    const scanned = scanner.find((object) => object.port == port);
    if (!scanned) return;
    if (DEBUG_FILE) {
      logInFile(`Killing PID=${scanned.pid} with PORT=${scanned.port}`);
    }
    try {
      process.kill(scanned.pid);
    } catch (error) {
      logInFile(`Error Killing PID=${scanned.pid} with PORT=${scanned.port}: ${error.message}`);
    }
  });

  unlinkSync(PORTS_FILE);
  if (DEBUG_FILE) {
    logInFile('Finished Process Killer');
  }
  return null;
};

module.exports = {
  execBackground, loadPort, killPidsOnPorts, portScanner,
};
