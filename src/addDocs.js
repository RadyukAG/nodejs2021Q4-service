import path from 'path';
import swagger from 'fastify-swagger';
import app from './app';
import URLS from './common/urls';

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

export default addDocs;
