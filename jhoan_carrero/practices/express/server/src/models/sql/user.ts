/* eslint-disable class-methods-use-this */
import { User as UserBase, UserQuery, UserSchema } from '@models/schemas';
import DataTypes from 'sequelize';
import sequelize from '@config/sql/connection';

const schema = {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

const driver = sequelize.define('User', schema, { tableName: 'users' });

export default class User extends UserBase {
  static schema = schema;

  static driver = driver;

  private user: UserSchema;

  constructor(user: UserSchema) {
    super(user);
    this.user = user;
  }

  async save() {
    const data: any = { ...this.user };
    await this.driver.create(data);
    return this.user;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async find(query: UserQuery) {
    const user: UserSchema = {
      name: '',
      email: '',
      password: '',
    };
    return [user];
  }

  async findOne() {
    const user: UserSchema = {
      name: '',
      email: '',
      password: '',
    };
    return user;
  }

  async updateOne() {
    const user: UserSchema = {
      name: '',
      email: '',
      password: '',
    };
    return user;
  }

  async deleteOne() {
    const user: UserSchema = {
      name: '',
      email: '',
      password: '',
    };
    return user;
  }

  async update() {
    const user: UserSchema = {
      name: '',
      email: '',
      password: '',
    };
    return user;
  }
}
