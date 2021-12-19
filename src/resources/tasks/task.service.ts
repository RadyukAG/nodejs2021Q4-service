import tasksRepo from './task.memory.repository';
import Task from './task.model';
import { ITask, DraftTask } from './types';
/**
 * Add task to task repo and returns it
 * 
 * @param task - instance of DraftTask, e.g. body from the request
 * @returns - instance of ITask form the repo.
 */
const addTask = (task: DraftTask): ITask | undefined => {
    const newTask = new Task(task).getTask();
    return tasksRepo.getTasksRepo(newTask.boardId).addItem(newTask);
};
/**
 * Checks if task exists in repo
 * 
 * @param boardId - id of a board with tasks
 * @param taskId - id of a specific task
 * @returns true, if task persist in repo, or otherwise false
 */
const isTaskExists = (boardId: string, taskId: string): boolean => tasksRepo.getTasksRepo(boardId).checkItem(taskId);
/**
 * Get all tasks, that belong to specific board
 * 
 * @param boardId - id of a board with tasks
 * @returns array of instances, saved in tasks repo
 */
const getTasksByBoardId = (boardId: string): (ITask | undefined)[] => tasksRepo.getTasksRepo(boardId).getAllItems();
/**
 * Get specific task
 * 
 * @param boardId - id of a board with tasks
 * @param taskId - id of task
 * @returns - task from repo
 */
const getTaskById = (boardId: string, taskId: string): ITask | undefined => tasksRepo.getTasksRepo(boardId).getItem(taskId);
/**
 * Delete task from repo (set it to undefined)
 * 
 * @param boardId - id of a board with tasks
 * @param taskId - id of task
 * @returns - true if task was deleted or false, if it was no found
 */
const deleteTask = (boardId: string, taskId: string): boolean => tasksRepo.getTasksRepo(boardId).deleteItem(taskId);

/**
 * Update task
 * 
 * @param task - task with updated fields
 * @returns updated task
 */
const updateTask = (task: ITask): ITask | undefined => tasksRepo.getTasksRepo(task.boardId).updateItem(task.id, task);
/**
 * Get tasks, that have specific field with specific value
 * 
 * @param field - key of a ITask instance field
 * @param value - value of field
 * @returns array of tasks
 */
const getTasksByField = (field: keyof ITask, value: string): (ITask | undefined)[] => 
    tasksRepo.getAllBoards()
        .filter(repo => repo !== null)
        .map(repo => repo.getItemsByFieldValue(field, value))
        .flat(); 

export {
    addTask,
    getTasksByBoardId,
    getTaskById,
    deleteTask,
    isTaskExists,
    updateTask,
    getTasksByField,
};
