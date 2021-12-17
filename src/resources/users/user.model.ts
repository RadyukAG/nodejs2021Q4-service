import { v4 as uuidv4 } from 'uuid';
import { IDraftUser, IUser, IUserToResponse } from './types';

class User {
  user: IUser;

/**
 * Create user with input params
 * 
 * @param param0.id (string) - user identificator
 * @param param0.name (string) - user name
 * @param param0.login (string) - user login
 * @param param0.password (string) - user password
 */
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  }: IDraftUser) {
    this.user = {
      id,
      name,
      login,
      password
    };
  }

/**
 * 
 * @returns user, constructed during class instance creation
 */
  getUser() {
    return this.user;
  }

/**
 * Remove password from user object, in order to return data 
 * 
 * @param user instance of IUser or null
 * @returns null, if user is null, or user without password
 */
  static toResponse(user: IUser | null): IUserToResponse | null {
    if (user === null) {
      return user;
    }
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
