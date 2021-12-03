const tasksRepo = require('./task.memory.repository');
const Task = require('./task.model');

const addTask = (task) => {
    const newTask = new Task(task).getTask();
    return tasksRepo.getTasksRepo(newTask.boardId).addItem(newTask);
};

module.exports = {
    addTask,
}
