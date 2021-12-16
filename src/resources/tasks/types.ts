import { Item } from "../../common/repo";

interface DraftTask {
    id?: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string | null;
}

interface ITask extends Item {
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string | null;
}

interface TaskParamsWithBoardId {
    boardId: string;
}

interface FullTaskParams extends TaskParamsWithBoardId {
    taskId: string;
}

export {
    DraftTask,
    ITask,
    FullTaskParams,
    TaskParamsWithBoardId,
};
