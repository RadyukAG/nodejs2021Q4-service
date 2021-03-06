import fastify from 'fastify';
import config from './common/config';

const path = require('path');

const app = fastify({
    logger: {
        level: config.LOG_LEVEL || 'info',
        file: path.resolve('logs/log.txt'),
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
          },
        }    
    }
});

export default app;
