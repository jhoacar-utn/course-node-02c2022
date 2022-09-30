import srcPath from '@src/dirname';

// eslint-disable-next-line import/no-dynamic-require
const packageJSON = require(`${srcPath}/../../package.json`);

type PackageOptions = {
  minimal: boolean | undefined
};

export const getVersion = (opts: PackageOptions) => {
  if (!opts.minimal) return packageJSON?.version || '1.0.0';
  return packageJSON?.version.split('.').shift() || 1;
};

export const getPackage = () => packageJSON;
