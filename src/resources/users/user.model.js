import { uuidv4 } from 'uuid';

class User {
  // interface User {
  //   id: uuid;
  //   name: string;
  //   login: string;
  //   password: string;
  // }

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
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

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
