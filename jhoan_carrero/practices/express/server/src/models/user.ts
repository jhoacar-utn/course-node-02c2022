/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/prefer-default-export */
import { driver, SQL, MONGO } from '@config/database';

let userModule: string = '';

switch (driver) {
  case SQL:
    userModule = './sql/user';
    break;
  case MONGO:
    userModule = './mongo/user';
    break;
  default:
    throw new Error(`Must be specified DB_CONNECTION environment variable, and can be: ${SQL}, ${MONGO}, not ${driver}`);
}

export const User = require(userModule).default;
