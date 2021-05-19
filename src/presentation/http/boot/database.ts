import { Application } from 'express';
import { asValue, AwilixContainer } from 'awilix';

import knex from 'knex';
import config from '../../../config';
import migratorFactory from '../../../lib/migrator';

async function database(app: Application, container: AwilixContainer) {
  const db = knex(config.database.development);

  const migrator = migratorFactory(db, config.database.development.migrations.directory);

  // Run migrations
  await migrator.up({});

  container.register({
    db: asValue(db)
  });
}

export default database;