import * as boardsService from './boards.service';
import app from '../../app';
import URLS from '../../common/urls';
import { BoardParamsWithId, IBoard, IDraftBoard } from './types';

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

app.post<{ Body: IDraftBoard }>(URLS.BOARDS, { schema }, async (request, reply): Promise<void> => {
    request.log.info({ id: request.id, body: request.body }, 'Request body');
    const result = boardsService.addBoard(request.body);
    reply.code(201);
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(result);
});

app.get(URLS.BOARDS, async (request, reply) => {
    const boards = boardsService.getAllBoards();
    reply.code(200);
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(boards);
});

app.get<{ Params: BoardParamsWithId }>(URLS.BOARDS_PARAM, async (request, reply) => {
    const board = boardsService.getBoard(request.params.id);
    if (!board) {
        reply.code(404);
        reply.send('Board not found');
    } else {
        reply.code(200);
        reply.header('Content-Type', 'application/json; charset=utf-8');
        reply.send(board);
    }
});

app.put<{ Params: BoardParamsWithId, Body: IBoard}>(URLS.BOARDS_PARAM, { schema }, async (request, reply) => {
    request.log.info({ id: request.id, body: request.body }, 'Request body');
    if (!boardsService.isBoardExists(request.params.id)) {
        reply.code(400);
        reply.send('Bad request');
        return;
    }
    const result = boardsService.updateBoard(request.params.id, request.body);
    reply.code(200);
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(result);
});

app.delete<{ Params: BoardParamsWithId }>(URLS.BOARDS_PARAM, (request, reply) => {
    if (!boardsService.isBoardExists(request.params.id)) {
        reply.code(404);
        reply.send('Board not found');
        return;
    }
    boardsService.deleteBoard(request.params.id);
    reply.code(204).send();
});
