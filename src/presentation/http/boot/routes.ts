import { Application, Router } from 'express';
import { AwilixContainer } from 'awilix';
import injectorFor from '../../../lib/Injector';
import studentControllerFactory from '../studentController';

async function routes(app: Application, container: AwilixContainer) {
  const { withInjector } = injectorFor(container);

  const router = Router();

  router.use('/students', withInjector(studentControllerFactory));

  app.use('/api', router);
}

export default routes;