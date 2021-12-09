interface DraftTask {
    id?: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string | null;
}

interface ITask extends DraftTask {
    id: string;
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
