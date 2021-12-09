import * as boardsService from './boards.service';
import app from '../../app';
import URLS from '../../common/urls';

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
            reply.code(404);
            reply.send('Board not found');
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

app.put(URLS.BOARDS_PARAM, { schema }, async (request, reply) => {
    try {
        if (!boardsService.isBoardExists(request.params.id)) {
            reply.code(400);
            reply.send('Bad request');
            return;
        }
        const result = boardsService.updateBoard(request.params.id, request.body);
        reply.code(200);
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(result);
    } catch (err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});

app.delete(URLS.BOARDS_PARAM, (request, reply) => {
    try {
        if (!boardsService.isBoardExists(request.params.id)) {
            reply.code(404);
            reply.send('Board not found');
            return;
        }
        boardsService.deleteBoard(request.params.id);
        reply.code(204).send();
    } catch (err) {
        app.log.error(`Error occurred: ${err.message}`);
        reply.code(500).send();
    }
});
