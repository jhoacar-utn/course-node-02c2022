/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable array-callback-return */
/* eslint-disable no-console */
import { exec } from 'child_process';
import { existsSync } from 'fs';
import colors from 'colors';
import { join } from 'path';
import { readdir } from 'fs/promises';

const taskPath = 'tasks';
const roots = [];
const tasks = await readdir(taskPath);

for (const task of tasks) {
  const lesson = await readdir(join(taskPath, task));
  if (lesson.some((file) => file.includes('test'))) {
    roots.push(join(taskPath, task));
  }
}

function installTestDependecies(folder) {
  if (existsSync(join(folder, 'node_modules'))) {
    return Promise.resolve({ stdout: `Packages installed in ${colors.green(folder)}` });
  }
  console.log(colors.yellow('Installing dependencies in: ') + colors.green(folder));
  return new Promise((resolve, reject) => {
    exec(`cd ${folder} && npm i`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

for (const root of roots) {
  const { stdout, stderr } = await installTestDependecies(root);
  console.log(colors.gray(stdout || ''));
  console.log(colors.red(stderr || ''));
}

export default {
  roots,
};
