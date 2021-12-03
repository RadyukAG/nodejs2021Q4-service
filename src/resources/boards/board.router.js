const boardsService = require('./boards.service');
const app = require('../../app');
const URLS = require('../../common/urls');

const boardBodySchema = {
    type: 'object',
    required: ['title', 'columns'],
    properties: {
        title: { type: 'string' },
        columns: { 
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    title: { type: 'string' },
                    order: { type: 'integer' },
                }
            }
        }
    }
}
  
  const schema = {
    body: boardBodySchema
  }

app.post(URLS.BOARDS, { schema }, async (request, reply) => {
    try {
        const result = boardsService.addBoard(request.body);
        reply.code(201);
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(result);
    } catch (err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});

app.get(URLS.BOARDS, async (request, reply) => {
    try {
        const boards = boardsService.getAllBoards();
        reply.code(200);
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(boards);
    } catch (err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});

app.get(URLS.BOARDS_PARAM, async (request, reply) => {
    try {
        const board = boardsService.getBoard(request.params.id);
        if (!board) {
            reply.code(400);
            reply.send('User not found');
        } else {
            reply.code(200);
            reply.header('Content-Type', 'application/json; charset=utf-8');
            reply.send(board);
        }
    } catch (err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});
