import express from 'express';
import bootstrap from './boot';
import logger from '../../lib/logger';

async function appFactory() {
  const app = express();

  await bootstrap(app);

  app.start = () => {
    app.listen(3000, () => {
      logger.info('Webserver listening on port 3000');
    });
  }

  return app;
}

export default appFactory;