import { readdirSync, existsSync } from 'fs';

/**
 * This a recursive function that returns all files
 * from a directory including his subdirectories
 * @param {string}
 * @return {Array}
 */
export function getAllFiles(src) {
  if (!existsSync(src)) { return []; }

  let files = [];

  /* eslint-disable-next-line no-restricted-syntax */
  for (const file of readdirSync(src, { withFileTypes: true })) {
    if (file.isDirectory()) {
      files = [...getAllFiles(`${src}/${file.name}`), ...files];
    } else {
      files.push(`${src}/${file.name}`);
    }
  }
  return files;
}

export default 'Files';
