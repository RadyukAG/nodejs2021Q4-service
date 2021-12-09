import { FastifyRequest, FastifyReply } from 'fastify';

interface DraftTask {
    id?: string;
    title: string;
    order: number;
    description: string;
    userId: string | null;
    boardId: string;
    columnId: string | null;
}

interface Task extends DraftTask {
    id: string;
}


interface TaskParamsWithBoardId {
    boardId: string;
}

interface FullTaskParams extends TaskParamsWithBoardId {
    taskId: string;
}

interface TaskRequestWithBoardId extends FastifyRequest {
    params: TaskParamsWithBoardId;
}

interface TaskRequestWithParams extends FastifyRequest {
    params: FullTaskParams;
}

interface TaskRequestWithBody extends TaskRequestWithParams {
    body: Task;
}

interface CreateTaskRequest {
    params: TaskParamsWithBoardId,
    body: DraftTask,
}

export {
    Task,
    TaskRequestWithParams,
    FullTaskParams,
    TaskParamsWithBoardId,
    CreateTaskRequest,
    TaskRequestWithBody,
    TaskRequestWithBoardId,
};
