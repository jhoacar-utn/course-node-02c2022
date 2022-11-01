const { clock } = require('cli-spinners');
const { bold } = require('colors');
/**
 * This function show in console a message
 * using the spinner and return the ID for the interval
 * @param {string} message
 * @return {number}
 */
function showSpinner(message) {
  const spinner = clock;
  message.replace(/(\r\n|\n|\r)/gm, '');
  process.stdout.write('\n');
  let index = 0;
  return setInterval(() => {
    // const resetCursor = "\x1B[0G";
    process.stdout.write('\r');
    process.stdout.write(spinner.frames[index]);
    process.stdout.write(bold(message));
    index = ++index % spinner.frames.length;
  }, spinner.interval);
}

module.exports = {
  showSpinner,
};
