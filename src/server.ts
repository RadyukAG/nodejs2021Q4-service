import config from './common/config';
import app from './app';
import './resources/users/user.router';
import './resources/boards/board.router';
import './resources/tasks/task.router';
import './addDocs';
import './errorHandling';

/**
 * Runs the server
 */
const startServer = async (): Promise<void> => {
  try {
    await app.listen(config.PORT || 4000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

startServer();

