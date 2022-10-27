const { execSync } = require('child_process');

/**
 * This function returns the current branch
 * of a git environment, returns an empty
 * string if the environment has not git
 * @return {string}
 */
function getCurrentBranch() {
  const GitCommandBranch = "git branch 2> /dev/null | grep '*' | awk '{print $NF}'";
  return execSync(GitCommandBranch).toString().trim();
}

module.exports = {
  getCurrentBranch,
};
