import { Options, Sequelize } from 'sequelize';
import { uri } from '@config/database';

const options: Options = {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

const sequelize = new Sequelize(uri, options);

export const connection = async () => {
  await sequelize.authenticate();
};

export default sequelize;
