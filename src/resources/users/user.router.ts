import * as usersService from './user.service';
import app from '../../app';
import URLS from '../../common/urls';
import User from './user.model';
import * as tasksService from '../tasks/task.service';
import { IDraftUser, IUser, UserParamsWithId } from './types';

const addUserRequestBodySchema = {
  type: 'object',
  required: ['name', 'password', 'login'],
  properties: {
    name: { type: 'string' },
    login: { type: 'string' },
    password: { type: 'string' },
  }
};

const schema = {
  body: addUserRequestBodySchema
}

app.post<{ Body: IDraftUser }>(URLS.ADD_USER, { schema }, async (request, reply) => {
  try {
    const result = usersService.addUser(request.body);
    reply.code(201);
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(User.toResponse(result));
  } catch(err) {
    if (err instanceof Error) {
      app.log.error(`Error occurred: ${err.message}`);
  }
      reply.code(500).send();
  }
});

app.get(URLS.ADD_USER, async (request, reply) => {
  try {
    const result = usersService.getAll();
    reply.code(200);
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(result.map(User.toResponse))
  } catch(err) {
    if (err instanceof Error) {
      app.log.error(`Error occurred: ${err.message}`);
  }
    reply.code(500).send();
  }
});

app.get<{ Params: { id: string } }>(URLS.GET_USER, async (request, reply) => {
  try {
    const user = usersService.getUser(request.params.id);
    if (!user) {
      reply.code(404);
      reply.send('User not found');
    } else {
      reply.code(200);
      reply.header('Content-Type', 'application/json; charset=utf-8');
      reply.send(User.toResponse(user));
    }
  } catch(err) {
    if (err instanceof Error) {
      app.log.error(`Error occurred: ${err.message}`);
  }
    reply.code(500).send();
  }
});

app.put<{ Params: { id: string }, Body: IUser}>(URLS.GET_USER, { schema }, async (request, reply) => {
  try {
    const result = usersService.updateUser(request.params.id, request.body);
    reply.code(200);
    reply.header('Content-Type', 'application/json; charset=utf-8');
    reply.send(User.toResponse(result));
  } catch(err) {
    if (err instanceof Error) {
      app.log.error(`Error occurred: ${err.message}`);
  }
      reply.code(500).send();
  }
});

app.delete<{ Params: UserParamsWithId }>(URLS.GET_USER, async (request, reply) => {
  try {
    const result = usersService.deleteUser(request.params.id);
    if (!result) {
      reply.code(404).send('User not found');
    } else {
      const userTasks = tasksService.getTasksByField('userId', request.params.id);
      if (userTasks) {
        userTasks.forEach(task => {
          if (task)
          tasksService.removeTask(task.boardId, task.id);
        });
      }
      reply.code(204).send();
    }
  } catch(err) {
    if (err instanceof Error) {
      app.log.error(`Error occurred: ${err.message}`);
  }
    reply.code(500).send();
  }
});