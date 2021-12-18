const app = require('../../app');
const URLS = require('../../common/urls');
const tasksService = require('./task.service');

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

app.post(URLS.TASKS, { schema }, async (request, reply) => {
    try {
      const result = tasksService.addTask({
          ...request.body,
          boardId: request.params.boardId,
      });
      reply.code(201);
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.send(result);
    } catch(err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});

app.get(URLS.TASKS, async (request, reply) => {
    try {
        const result = tasksService.addTasksByBoardId(request.params.boardId);
        reply.code(200);
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(result);
    } catch(err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});

app.get(URLS.TASKS_PARAM, async (request, reply) => {
    try {
console.log(request.params.boardId, request.params.taskId);
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
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});

app.delete(URLS.TASKS_PARAM, async (request, reply) => {
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
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});

app.put(URLS.TASKS_PARAM, { schema }, async (request, reply) => {
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
    } catch(err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});