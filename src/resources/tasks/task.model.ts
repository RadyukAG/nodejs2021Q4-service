import { v4 as uuidv4 } from 'uuid';
import { DraftTask, ITask } from './types';

class Task {
    task: ITask;

/**
 * Save an input as a task in class instance
 * 
 * @param param0.id - string identificater
 * @param param0.title - string title
 * @param param0.order - number as an order
 * @param param0.description - string description of a task
 * @param param0.userId = string id of assigned user
 * @param param0.boardId - string id of a border
 * @param param0.columnId - string id of a column
 */
    constructor({
        id = uuidv4(),
        title = 'Title',
        order = 0,
        description = 'Description',
        userId = 'UserId',
        boardId = 'BoardId',
        columnId = 'ColumnId',
    }: DraftTask) {
        this.task = { id, title, order, description, userId, boardId, columnId };
    }

/**
 * Get a task
 * 
 * @returns ITask instance that saved in object
 */
    getTask(): ITask {
        return this.task;
    }
};

export default Task;
