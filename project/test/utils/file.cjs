const { readdirSync, statSync } = require('fs');
const { join } = require('path');
const { ROOT_PATH } = require('../config.cjs');
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

module.exports = {
  extractStudentFolder,
};
