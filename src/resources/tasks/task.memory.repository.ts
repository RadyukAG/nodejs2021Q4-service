import { Repo } from '../../common/repo';
import { ITask } from './types';

class TasksRepo {
    repo: {
        [id: string]: Repo<ITask>;
      }

    constructor() {
        this.repo = {};
    }

    createRepoForBoard(boardId: string): Repo<ITask> {
        this.repo[boardId] = new Repo<ITask>();
        return this.repo[boardId];
    };

    checkIfBoardTasksRepoExist(boardId: string): boolean {
        return !!this.repo[boardId];
    };

    getTasksRepo(boardId: string): Repo<ITask> {
        return this.checkIfBoardTasksRepoExist(boardId) ? this.repo[boardId] : this.createRepoForBoard(boardId);
    };

    getAllBoards() {
        return Object.values(this.repo);
    }
}

export default new TasksRepo();
