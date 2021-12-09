import { v4 as uuidv4 } from 'uuid';
import { DraftTask, ITask } from './types';

class Task {
    task: ITask;

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

    getTask() {
        return this.task;
    }

    static toResponse(task: ITask) {
        return {
            ...task,
            columnId: undefined,
            boardId: undefined,
        };
    }
};

export default Task;
