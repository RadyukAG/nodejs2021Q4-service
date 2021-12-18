const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const addTask = (task) => {
    const newTask = new Task(task).getTask();
    return tasksRepo.getTasksRepo(newTask.boardId).addItem(newTask);
};

const isTaskExists = (boardId, taskId) => tasksRepo.getTasksRepo(boardId).checkItem(taskId);

const addTasksByBoardId = (boardId) => tasksRepo.getTasksRepo(boardId).getAllItems();

const getTaskById = (boardId, taskId) => tasksRepo.getTasksRepo(boardId).getItem(taskId);

const deleteTask = (boardId, taskId) => tasksRepo.getTasksRepo(boardId).deleteItem(taskId);

const updateTask = (task) => tasksRepo.getTasksRepo(task.boardId).updateItem(task);

const getTasksByField = (field, value) => tasksRepo.getAllBoards().map(repo => repo.getItemsByFieldValue(field, value)).flat(); 

module.exports = {
    addTask,
    addTasksByBoardId,
    getTaskById,
    deleteTask,
    isTaskExists,
    updateTask,
    getTasksByField,
}