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
 * @param {string} string
 */
function cleanLogContent(content) {
  const regexCleanColors = /\033\[[\d;]+m/gm;
  const regexRemoveBreakLines = /(\r\n|\n|\r)/gm;
  return content
    .replaceAll(regexCleanColors, '')
    .replace(regexRemoveBreakLines, '');
}
/**
 * This function save the content in debug file
 * @param {string} content
 * @return {string}
 */
function logInFile(content) {
  if (!content || typeof content !== 'string') {
    return content;
  }

  appendFileSync(LOG_FILE, `DEBUG> ${cleanLogContent(content)}\n`);
  return content;
}

module.exports = {
  extractStudentFolder,
  logInFile,
};
