export type UserError = Error & { user: UserSchema };

export interface UserSchema {
  name: string,
  email: string,
  password: string
}

export interface UserQuery {
  name: string | undefined,
  email: string | undefined
  id: number | undefined
}

export abstract class User implements UserSchema {
  name: string;

  email: string;

  password: string;

  schema: any | null;

  driver: any | null;

  constructor(user: UserSchema) {
    this.schema = null;
    this.driver = null;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }

  abstract save():Promise<UserSchema | UserError>;

  abstract find(user: UserQuery): Promise<Array<UserSchema | UserError>>;

  abstract findOne(user: UserQuery):Promise<UserSchema | UserError>;

  abstract updateOne(user: UserQuery, data: UserQuery):Promise<UserSchema | UserError>;

  abstract deleteOne(user: UserQuery):Promise<UserSchema | UserError>;
}
