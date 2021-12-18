import { Repo } from '../../common/repo';
import { ITask } from './types';

class RepoWithSpecialDeletion extends Repo<ITask> {
    updateTaskToNull(id: string): void {
        this.updateItem(id, null);
    }
}

export default RepoWithSpecialDeletion;
