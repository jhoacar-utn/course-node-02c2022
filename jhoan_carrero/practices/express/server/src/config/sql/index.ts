import sequelize, { connection } from './connection';
import '@models';

export const initialization = async () => {
  try {
    await connection();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error: any) {
    throw new Error(`Unable to connect to the database: ${error.message}`);
  }
};

export default sequelize;
