import usersRepo from './user.memory.repository';
import User from './user.model';

const getAll = () => usersRepo.getAllItems();

const addUser = (user) => {
    const newUser = new User(user).getUser();
    return usersRepo.addItem(newUser);
};

const getUser = (id) => usersRepo.getItem(id);

const updateUser = (id, user) => usersRepo.updateItem({ ...user, id });

const deleteUser = (id) => usersRepo.deleteItem(id);

export { getAll, addUser, getUser, updateUser, deleteUser };
