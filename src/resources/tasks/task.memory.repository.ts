import Repo from '../../common/repo';

class TasksRepo {
    repo: {
        [id: string]: Repo;
    }

    constructor() {
        this.repo = {}
    };

    createRepoForBoard(boardId: string) {
        this.repo[boardId] = new Repo();
        return this.repo[boardId];
    };

    checkIfBoardTasksRepoExist(boardId: string) {
        return !!this.repo[boardId];
    };

    getTasksRepo(boardId: string) {
        return this.checkIfBoardTasksRepoExist(boardId) ? this.repo[boardId] : this.createRepoForBoard(boardId);
    };

    getAllBoards() {
        return Object.values(this.repo);
    }
}

export default new TasksRepo();
