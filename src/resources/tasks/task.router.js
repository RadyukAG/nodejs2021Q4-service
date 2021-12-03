const app = require('../../app');
const URLS = require('../../common/urls');
const Task = require('./task.model');
const tasksService = require('./task.service');

const boardBodySchema = {
    type: 'object',
    required: ['title', 'order', 'columnId', 'description', 'userId', 'boardId'],
    properties: {
        title: { type: 'string' },
        order: { type: 'integer' },
        description: { type: 'string' },
        userId: { type: 'string' },
        boardId: { type: 'string' },
        columnId: { type: 'string' },
    }
}
  
const schema = {
    body: boardBodySchema
}

app.post(URLS.TASKS, { schema }, async (request, reply) => {
    try {
      const result = tasksService.addTask(request.body);
      reply.code(201);
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.send(Task.toResponse(result));
    } catch(err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});