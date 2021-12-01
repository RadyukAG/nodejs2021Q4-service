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

  getAllUsers() {
    return Object.values(this.repo);
  }

  getUser(id) {
    return this.repo[id];
  }

  updateUser(user) {
    this.repo[user.id] = {
      ...this.repo[user.id],
      ...user,
    }
  }

  deleteUser(id) {
    this.repo[id] = undefined;
  }
}

module.exports = { getAll, UsersRepo };
