const app = require('../../app');
const URLS = require('../../common/urls');
const tasksService = require('./task.service');
import { FastifyReply } from 'fastify';
import { TaskRequestWithParams, CreateTaskRequest, TaskRequestWithBody, TaskRequestWithBoardId } from './types';

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

app.post(URLS.TASKS, { schema }, async (request: CreateTaskRequest, reply: FastifyReply) => {
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

app.get(URLS.TASKS, async (request: TaskRequestWithBoardId, reply: FastifyReply) => {
    try {
        const result = tasksService.addTasksByBoardId(request.params.boardId);
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

app.get(URLS.TASKS_PARAM, async (request: TaskRequestWithParams, reply: FastifyReply) => {
    try {
        const task = tasksService.getTaskById(request.params.boardId, request.params.taskId);
        if (!task) {
            reply.code(404);
            reply.send('Task not found');
        } else {
            reply.code(200);
            reply.header('Content-Type', 'application/json; charset=utf-8');
            reply.send(task);
        }    
    } catch(err) {
        if (err instanceof Error) {
            app.log.error(`Error occurred: ${err.message}`);
        }
        reply.code(500).send();
    }
});

app.delete(URLS.TASKS_PARAM, async (request: TaskRequestWithParams, reply: FastifyReply) => {
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

app.put(URLS.TASKS_PARAM, { schema }, async (request: TaskRequestWithBody, reply: FastifyReply) => {
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
            taskId,
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
