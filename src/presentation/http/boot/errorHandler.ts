import { Application, NextFunction, Request, Response } from 'express';
import { AwilixContainer } from 'awilix';
import logger from '../../../lib/logger';

async function errorHandler(app: Application, container: AwilixContainer) {

  app.use((req: Request, res: Response) => {
    res.sendStatus(404);
  });

  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message);

    res.status(500).json({ error: err.message});
  });
}

export default errorHandler;