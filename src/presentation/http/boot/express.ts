import { AwilixContainer } from 'awilix';
import { Application, json, urlencoded } from 'express';
import httpLogger from 'pino-http';

async function express(app: Application, container: AwilixContainer) {
  app.use(httpLogger());
  app.use(json());
  app.use(urlencoded({extended: false}));
}

export default express;