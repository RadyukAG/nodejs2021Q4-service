import { FastifyReply } from 'fastify';
import { DraftTask, FullTaskParams, TaskParamsWithBoardId, ITask } from './types';
import app from '../../app';
import URLS from '../../common/urls';
import * as tasksService from './task.service';

const taskBodySchema = {
    type: 'object',
    required: ['title', 'order', 'description', 'userId', 'boardId'],
    properties: {
        title: { type: 'string' },
        order: { type: 'integer' },
        description: { type: 'string' },
        userId: { type: ['string', 'null'] },
        boardId: { type: ['string', 'null'] },
    }
}
  
const schema = {
    body: taskBodySchema
}

app.post<{ Params: FullTaskParams, Body: DraftTask }>(URLS.TASKS, { schema }, async (request, reply: FastifyReply) => {
    try {
      const result = tasksService.addTask({
          ...request.body,
          boardId: request.params.boardId,
      });
      reply.code(201);
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.send(result);
    } catch(err: unknown) {
        if (err instanceof Error) {
            app.log.error(`Error occurred: ${err.message}`);
        }
        reply.code(500).send();
    }
});

app.get<{ Params: TaskParamsWithBoardId }>(URLS.TASKS, async (request, reply: FastifyReply) => {
    try {
        const result = tasksService.getTasksByBoardId(request.params.boardId);
        reply.code(200);
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(result);
    } catch(err) {
        if (err instanceof Error) {
            app.log.error(`Error occurred: ${err.message}`);
        }
        reply.code(500).send();
    }
});

app.get<{ Params: FullTaskParams }>(URLS.TASKS_PARAM, async (request, reply: FastifyReply) => {
    try {
        const { boardId, taskId } = request.params;
        const task = tasksService.getTaskById(boardId, taskId);
        if (!tasksService.isTaskExists(boardId, taskId)) {
            reply.code(404);
            reply.send('Task not found');
        } else {
            reply.code(200);
            reply.header('Content-Type', 'application/json; charset=utf-8');
            task === null ? reply.send({ userId: null }) : reply.send(task);
        }    
    } catch(err) {
        if (err instanceof Error) {
            app.log.error(`Error occurred: ${err.message}`);
        }
        reply.code(500).send();
    }
});

app.delete<{ Params: FullTaskParams }>(URLS.TASKS_PARAM, async (request, reply: FastifyReply) => {
    try {
        const { boardId, taskId } = request.params;
        if (!tasksService.isTaskExists(boardId, taskId)) {
            reply.code(404);
            reply.send('Task not found');
            return;
        }
        tasksService.deleteTask(boardId, taskId);
        reply.code(204).send();
    } catch(err) {
        if (err instanceof Error) {
            app.log.error(`Error occurred: ${err.message}`);
        }
        reply.code(500).send();
    }
});

app.put<{ Params: FullTaskParams, Body: ITask }>(URLS.TASKS_PARAM, { schema }, async (request, reply: FastifyReply) => {
    try { 
        const { boardId, taskId } = request.params;
        if (!tasksService.isTaskExists(boardId, taskId)) {
            reply.code(404);
            reply.send('Task not found');
            return;
        }
        const result = tasksService.updateTask({
            ...request.body,
            boardId,
            id: taskId,
        });
        reply.code(200);
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(result);
    } catch(err: unknown) {
        if (err instanceof Error) {
            app.log.error(`Error occurred: ${err.message}`);
        }
        reply.code(500).send();
    }
});
