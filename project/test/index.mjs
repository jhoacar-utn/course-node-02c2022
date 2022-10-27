import colors from "colors";
import { existsSync, writeFileSync } from "fs";
import { join } from "path";
import { config } from "./config.cjs";
import { getCurrentBranch } from "./utils/git.cjs";
import { showSpinner } from "./utils/spinner.cjs";

const { ENVIRONMENT_FILE, ROOT_PATH } = config;
const { red, green, cyan, bold } = colors;
/**
 * @param {string} loading
 * @param {(resolve:fn,reject:fn,interval:number)=>void} callback
 * @returns
 */
const validation = (loading, callback) => {
  const timeout = process.env.TIMEOUT_VALIDATION || 3000;
  const interval = showSpinner(loading);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("\n");
      callback(resolve, reject, interval);
    }, timeout);
  });
};

const gitValidation = () =>
  validation("Analyzing Git Environment", (resolve, reject, interval) => {
    const branch = getCurrentBranch();
    if (!branch.length) {
      reject(new Error("Must be in a git repository"));
    }
    if (!branch.includes("_")) {
      reject(
        new Error(
          `The ${bold(branch)} is not a student branch, the student branch has the '_' (underscore) character`
        )
      );
    } else {
      console.log(
        `✅ The current branch ${green(branch)} is a branch of student!`
      );
      resolve();
    }
    clearInterval(interval);
  });

const folderValidation = () =>
  validation(
    `Analyzing Folder Structure in ${green(ROOT_PATH)}`,
    (resolve, reject, interval) => {
      const STUDENT_NAME = getCurrentBranch();
      if (!existsSync(join(ROOT_PATH, STUDENT_NAME))) {
        reject(
          new Error(
            `The ${bold(STUDENT_NAME)} folder must exists in ${bold(ROOT_PATH)}`
          )
        );
      }
      if (!existsSync(join(ROOT_PATH, STUDENT_NAME, "project"))) {
        reject(
          new Error(
            `The ${bold(
              `${STUDENT_NAME}/project`
            )} folder must exists in ${bold(ROOT_PATH)}`
          )
        );
      }

      clearInterval(interval);
      console.log(
        `✅ The folder ${green(
          `${STUDENT_NAME}/project`
        )} exists in ${ROOT_PATH}`
      );
      resolve();
    }
  );

if (!existsSync(ENVIRONMENT_FILE)) {
  try {
    await gitValidation();
    await folderValidation();
  } catch (error) {
    console.log(`\n${red(error.message)}`);
    process.exit(1);
  }
  writeFileSync(
    ENVIRONMENT_FILE,
    "This file is used for prevent inspect git environment and folders again"
  );
}

console.log(cyan("\n🧪 Initializating testing\n"));
