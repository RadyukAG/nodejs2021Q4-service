const { PORT } = require('./common/config');
const app = require('./app');
const addResources = require('./addResources');

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