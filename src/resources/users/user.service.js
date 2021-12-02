const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAllUsers();

const addUser = (user) => {
    const newUser = new User(user).getUser();
    return usersRepo.addUser(newUser);
};

const getUser = (id) => usersRepo.getUser(id);

const updateUser = (id, user) => usersRepo.updateUser({ ...user, id });

const deleteUser = (id) => usersRepo.deleteUser(id);

module.exports = { getAll, addUser, getUser, updateUser, deleteUser };
