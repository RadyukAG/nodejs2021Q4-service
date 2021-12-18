import RepoWithSpecialDeletion from './task.memory.RepoWithSpecialDeletion';

class TasksRepo {
    repo: {
        [id: string]: RepoWithSpecialDeletion;
    }

    constructor() {
        this.repo = {}
    };

    createRepoForBoard(boardId: string): RepoWithSpecialDeletion {
        this.repo[boardId] = new RepoWithSpecialDeletion();
        return this.repo[boardId];
    };

    checkIfBoardTasksRepoExist(boardId: string): boolean {
        return !!this.repo[boardId];
    };

    getTasksRepo(boardId: string): RepoWithSpecialDeletion {
        return this.checkIfBoardTasksRepoExist(boardId) ? this.repo[boardId] : this.createRepoForBoard(boardId);
    };

    getAllBoards() {
        return Object.values(this.repo);
    }
}

export default new TasksRepo();
