// const app = require('../../app');
// const URLS = require('../../common/urls');

// app.post(URLS.ADD_USER, { schema }, async (request, reply) => {
//     try {
//       const result = usersService.addUser(request.body);
//       reply.code(201);
//       reply.header('Content-Type', 'application/json; charset=utf-8');
//       reply.send(User.toResponse(result));
//     } catch(err) {
//         app.log.error(`Error occurred: ${err.message}`);
//         reply.code(500).send();
//     }
// });