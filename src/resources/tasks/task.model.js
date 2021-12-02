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
};

module.exports = Task;