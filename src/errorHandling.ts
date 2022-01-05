import app from './app';

const process = require('process');

app.setErrorHandler(async (err, req, reply) => {
    app.log.error(`Error handling request with id ${req.id}. Message: ${err.message}`);
    reply.status(500).send()
});

process.on('uncaughtException', (err: unknown) => {
    if (err instanceof Error) {
        app.log.error(`Uncaught exception thrown. Message: ${err.message}`);
    } else {
        app.log.error(`Uncaught exception thrown. Message: ${err}`);
    }
    process.exit(1);
});

process.on('unhandledRejection', (err: unknown) => {
    if (err instanceof Error) {
        app.log.error(`Unhandled rejection. Message: ${err.message}`);
    } else {
        app.log.error(`Unhandled rejection. Message: ${err}`);
    }
    process.exit(1);
})
