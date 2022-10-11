export const driver = process.env.DB_DRIVER || 'mysql';
export const uri = process.env.DB_URI || 'mysql://localhost/test';
export const SQL = 'sql';
export const MONGO = 'mongo';

export default {
  driver,
  uri,
  SQL,
  MONGO,
};
