import tasksRepo from './task.memory.repository';
import Task from './task.model';
import { ITask, DraftTask } from './types';
/**
 * Add task to task repo and returns it
 * 
 * @param task - instance of DraftTask, e.g. body from the request
 * @returns - instance of ITask form the repo.
 */
const addTask = (task: DraftTask): ITask | null | undefined => {
    const newTask = new Task(task).getTask();
    return tasksRepo.getTasksRepo(newTask.boardId).addItem(newTask);
};

const isTaskExists = (boardId: string, taskId: string): boolean => tasksRepo.getTasksRepo(boardId).checkItem(taskId);

const getTasksByBoardId = (boardId: string) => tasksRepo.getTasksRepo(boardId).getAllItems();

const getTaskById = (boardId: string, taskId: string) => tasksRepo.getTasksRepo(boardId).getItem(taskId);

const deleteTask = (boardId: string, taskId: string) => tasksRepo.getTasksRepo(boardId).deleteItem(taskId);

const updateTask = (task: ITask) => tasksRepo.getTasksRepo(task.boardId).updateItem(task.id, task);

const getTasksByField = (field: keyof ITask, value: string): (ITask | null | undefined)[] => 
    tasksRepo.getAllBoards()
        .filter(repo => repo !== null)
        .map(repo => repo.getItemsByFieldValue(field, value))
        .flat(); 

const removeTask = (boardId: string, taskId: string) => tasksRepo.getTasksRepo(boardId).updateTaskToNull(taskId);

export {
    addTask,
    getTasksByBoardId,
    getTaskById,
    deleteTask,
    isTaskExists,
    updateTask,
    getTasksByField,
    removeTask,
};
