const { execSync } = require('child_process');

/**
 * This function returns the current branch
 * of a git environment, returns an empty
 * string if the environment has not git
 * @return {string}
 */
function getCurrentBranch() {
  const GitCommandBranch = "git branch";
  let actualBranch = null;
  try {
    const branches = execSync(GitCommandBranch).toString().split('\n');
    branches.map((branch) => {
      if (branch.includes("*")) {
        actualBranch = branch.split('*').pop().trim();
      }
    })
    return actualBranch;
  } catch (e) {
    return actualBranch;
  }
}

module.exports = {
  getCurrentBranch,
};
