const { v4: uuidv4 } = require('uuid');

class Task {
    constructor({
        id = uuidv4(),
        title = 'Title',
        order = 0,
        description = 'Description',
        userId = 'UserId',
        boardId = 'BoardId',
        columnId = 'ColumnId',
    }) {
        this.task = { id, title, order, description, userId, boardId, columnId };
    }

    getTask() {
        return this.task;
    }

    static toResponse(task) {
        return {
            ...task,
            columnId: undefined,
            boardId: undefined,
        };
    }
};

module.exports = Task;