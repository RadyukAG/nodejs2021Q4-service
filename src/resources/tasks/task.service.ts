import tasksRepo from './task.memory.repository';
import Task from './task.model';
import { ITask, DraftTask } from './types';

const addTask = (task: DraftTask) => {
    const newTask = new Task(task).getTask();
    return tasksRepo.getTasksRepo(newTask.boardId).addItem(newTask);
};

const isTaskExists = (boardId: string, taskId: string) => tasksRepo.getTasksRepo(boardId).checkItem(taskId);

const addTasksByBoardId = (boardId: string) => tasksRepo.getTasksRepo(boardId).getAllItems();

const getTaskById = (boardId: string, taskId: string) => tasksRepo.getTasksRepo(boardId).getItem(taskId);

const deleteTask = (boardId: string, taskId: string) => tasksRepo.getTasksRepo(boardId).deleteItem(taskId);

const updateTask = (task: ITask) => tasksRepo.getTasksRepo(task.boardId).updateItem(task);

const getTasksByField = (field: keyof ITask, value: string): (ITask | null)[] => 
    tasksRepo.getAllBoards()
        .filter(repo => repo !== null)
        .map(repo => repo.getItemsByFieldValue(field, value))
        .flat(); 

export {
    addTask,
    addTasksByBoardId,
    getTaskById,
    deleteTask,
    isTaskExists,
    updateTask,
    getTasksByField,
};
