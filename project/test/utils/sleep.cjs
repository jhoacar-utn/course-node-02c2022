/**
 * Sleep a time in seconds using promises
 * @param {number} time
 * @return {Promise<void>}
 */
const sleep = (time) =>
  new Promise((resolve, reject) => setTimeout(resolve, time * 1000));

module.exports = sleep;
