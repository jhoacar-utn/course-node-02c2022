import { driver, SQL, MONGO } from '@config/database';

// eslint-disable-next-line no-var
var module: string = '';

switch (driver) {
  case SQL:
    module = '../config/sql';
    break;
  case MONGO:
    module = '../config/mongo';
    break;
  default:
    throw new Error(`Must be specified DB_DRIVER environment variable, and can be: ${SQL}, ${MONGO}, not ${driver}`);
}

// eslint-disable-next-line import/no-dynamic-require, global-require, import/prefer-default-export
export const { initialization } = require(module);
