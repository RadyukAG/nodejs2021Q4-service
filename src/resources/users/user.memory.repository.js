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
    return this.repo[user.id];
  }

  deleteUser(id) {
    if (this.repo[id]) {
      this.repo[id] = undefined;
      return true;
    }
    return false;
  }
}

const usersRepo = new UsersRepo();

module.exports = usersRepo;
