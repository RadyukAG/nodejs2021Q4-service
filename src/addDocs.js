const path = require('path');
const swagger = require('fastify-swagger');
const app = require('./app');
const URLS = require('./common/urls');

const swaggerOptions = {
    mode: 'static',
    exposeRoute: true,
    routePrefix: URLS.DOCS,
    specification: {
        path: path.join(__dirname, '../doc/api.yaml'),
    },
}

const addDocs = () => {
    app.register(swagger, swaggerOptions);
}

module.exports = addDocs;
