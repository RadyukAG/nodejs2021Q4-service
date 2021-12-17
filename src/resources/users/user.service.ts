import usersRepo from './user.memory.repository';
import User from './user.model';
import { IDraftUser, IUser } from './types';
/**
 * Get all users, store in repo
 * 
 * @returns array of IUser instances and nulls, saved in users repo
 */
const getAll = (): (IUser | null)[] => usersRepo.getAllItems();
/**
 * Add user to repo
 * 
 * @param user - instance of IDraftUser
 * @returns user, saved in users repo
 */
const addUser = (user: IDraftUser): IUser | null => {
    const newUser = new User(user).getUser();
    return usersRepo.addItem(newUser);
};
/**
 * Get user to repo
 * 
 * @param id - string id of a user, 
 * @returns - User from repo, or null, if it was deleted.
 */
const getUser = (id: string): IUser | null => usersRepo.getItem(id);
/**
 * Update user in repo
 * 
 * @param id - string id of a user
 * @param user - user with changed fields, that should update values of specific user in repo.
 * @returns updated user. If null, repo method will throw error.
 */
const updateUser = (id: string, user: IDraftUser): IUser | null => usersRepo.updateItem({ ...user, id });
/**
 * Remove user from repo
 * 
 * @param id - string id of user
 * @returns true if user successfully deleted and false, if user not found
 */
const deleteUser = (id: string): boolean => usersRepo.deleteItem(id);

export { getAll, addUser, getUser, updateUser, deleteUser };
