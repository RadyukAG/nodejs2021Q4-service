const Repo = require('../../common/repo');

class TasksRepo {
    constructor() {
        this.repo = {}
    };

    createRepoForBoard(boardId) {
        this.repo[boardId] = new Repo();
        return this.repo[boardId];
    };

    checkIfBoardTasksRepoExist(boardId) {
        return !!this.repo[boardId];
    };

    getTasksRepo(boardId) {
        return this.checkIfBoardTasksRepoExist(boardId) ? this.repo[boardId] : this.createRepoForBoard(boardId);
    }
}

module.exports = new TasksRepo();
