const uuid = require('uuid');
const { RequestError } = require('../../common/errors');

class User {
  // interface User {
  //   id: uuid;
  //   name: string;
  //   login: string;
  //   password: string;
  // }

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.user.id = id;
    this.user.name = name;
    this.user.login = login;
    this.user.password = password;
  }

  getUser() {
    return this.user;
  }

  validateUser (user) {
    if (!user.name || typeof user.name !== 'string') {
      throw new RequestError('User name is invalid');
    };

    if (!user.password || typeof user.password !== 'string') {
      throw new RequestError('User password is invalid');
    };

    if (!user.login || typeof user.login !== 'string') {
      throw new RequestError('User login is invalid');
    };

    return true;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
