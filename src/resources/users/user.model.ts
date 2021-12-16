import { v4 as uuidv4 } from 'uuid';
import { IDraftUser, IUser, IUserToResponse } from './types';

class User {
  user: IUser;

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

  getUser() {
    return this.user;
  }

  static toResponse(user: IUser | null): IUserToResponse | null {
    if (user === null) {
      return user;
    }
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
