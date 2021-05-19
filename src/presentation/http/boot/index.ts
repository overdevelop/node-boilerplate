import { Application } from 'express';
import { AwilixContainer, createContainer } from 'awilix';

import express from './express';
import database from './database';
import repositories from './repositories';
import services from './services';
import routes from './routes';
import errorHandler from './errorHandler';

type InitFunction = (app: Application, container: AwilixContainer) => void;

async function bootstrap(app: Application) {

  const container = createContainer();

  const init = async (fns: InitFunction[]) => {
    for (const fn of fns) {
      await fn(app, container);
    }
  }

  await init([express, database, repositories, services, routes, errorHandler]);

}

export default bootstrap;