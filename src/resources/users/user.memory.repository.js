const getAll = async () => {}
  // TODO: mock implementation. should be replaced during task development
;

class UsersRepo {
  constructor() {
    this.repo = {};
  }

  addUser(user) {
    this.repo[user.id] = user;
    return this.repo[user.id];
  }

  
}

module.exports = { getAll, UsersRepo };
