const {
  readdirSync, statSync, appendFileSync,
} = require('fs');
const { join } = require('path');
const { ROOT_PATH, LOG_FILE } = require('../config.cjs');
/**
 * @return {string | undefined}
 */
function extractStudentFolder() {
  return readdirSync(ROOT_PATH).filter(
    (filename) => statSync(join(ROOT_PATH, filename)).isDirectory()
      && filename !== 'node_modules'
      && filename.includes('_'),
  ).shift();
}
/**
 * This function save the content in debug file
 * @param {string} content
 * @return {string}
 */
function logInFile(content) {
  appendFileSync(LOG_FILE, `\n${content}\n`);
  return content;
}

module.exports = {
  extractStudentFolder,
  logInFile,
};
