/**
 * Sleep a time in seconds using promises
 * @param {number} time
 * @return {Promise<void>}
 */
const sleep = (time) => new Promise((resolve) => { setTimeout(resolve, time * 1000); });

module.exports = sleep;
