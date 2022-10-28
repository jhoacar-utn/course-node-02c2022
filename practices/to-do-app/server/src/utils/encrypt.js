/* eslint-disable import/no-unresolved */
const { hash, compare } = require('bcrypt');
/**
 * This function encrypt a text
 * @param {string} text
 * @return {Promise<string>}
 */
module.exports.encrypt = (text) => hash(text, 10);
/**
 * This function compare the plain text and the encrypted text
 * @param {string} text
 * @param {string} encrypted
 * @return {Promise<boolean>}
 */
module.exports.compare = (text, encrypted) => compare(text, encrypted);
