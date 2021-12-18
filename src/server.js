const { PORT } = require('./common/config');
const app = require('./app');
const addResources = require('./addResources');
require('./resources/users/user.router');
require('./resources/boards/board.router');
require('./resources/tasks/task.router');

addResources();
const startServer = async() => {
  try {
    await app.listen(PORT);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();