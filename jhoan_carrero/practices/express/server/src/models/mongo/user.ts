/* eslint-disable class-methods-use-this */
import { User as UserBase, UserQuery, UserSchema } from '@models/schemas';
import { model, Schema } from 'mongoose';

const schema = new Schema({
  name: String,
  email: String,
  password: String,
});

const driver = model('User', schema);

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
    // eslint-disable-next-line new-cap
    await (new this.driver(data)).save();
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
