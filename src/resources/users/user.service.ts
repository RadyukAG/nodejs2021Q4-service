import usersRepo from './user.memory.repository';
import User from './user.model';
import { IDraftUser, IUser } from './types';

const getAll = () => usersRepo.getAllItems();

const addUser = (user: IDraftUser): IUser | null => {
    const newUser = new User(user).getUser();
    return usersRepo.addItem(newUser);
};

const getUser = (id: string) => usersRepo.getItem(id);

const updateUser = (id: string, user: IDraftUser) => usersRepo.updateItem({ ...user, id });

const deleteUser = (id: string) => usersRepo.deleteItem(id);

export { getAll, addUser, getUser, updateUser, deleteUser };
