import config from './common/config';
import app from './app';
import addResources from './addResources';
import './resources/users/user.router';
import './resources/boards/board.router';
import './resources/tasks/task.router';

addResources();
const startServer = async () => {
  try {
    await app.listen(config.PORT || 4000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();
