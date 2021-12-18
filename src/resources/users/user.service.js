const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAllItems();

const addUser = (user) => {
    const newUser = new User(user).getUser();
    return usersRepo.addItem(newUser);
};

const getUser = (id) => usersRepo.getItem(id);

const updateUser = (id, user) => usersRepo.updateItem({ ...user, id });

const deleteUser = (id) => usersRepo.deleteItem(id);

module.exports = { getAll, addUser, getUser, updateUser, deleteUser };
