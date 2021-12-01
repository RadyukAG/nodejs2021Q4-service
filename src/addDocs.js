const path = require('path');
const app = require('./app');

const DOCS_URL = '/docs';
const swaggerOptions = {
    mode: 'static',
    exposeRoute: true,
    routePrefix: DOCS_URL,
    specification: {
        path: path.join(__dirname, '../doc/api.yaml'),
    },
}

const addDocs = () => {
    app.register(require('fastify-swagger'), swaggerOptions);
}

module.exports = addDocs;
