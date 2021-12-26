import fastify from 'fastify';

const app = fastify({
    logger: {
        level: 'info',
        serializers: {
            res (reply) {
              return {
                statusCode: reply.statusCode
              }
            },
            req (request) {
              return {
                method: request.method,
                url: request.url,
                parameters: request.params,
              };
            }
        }    
    }
});

export default app;
