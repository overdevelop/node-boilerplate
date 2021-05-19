import Umzug from "umzug";
import Knex from "knex";
import pino from "pino";

const logger = pino();

function migratorFactory(connection: Knex, migrationsPath: string) {
  return new Umzug({
    migrations: {
      path: migrationsPath,
      params: [connection],
      pattern: /^\d+[\w-]+\.(ts|js)$/,
    },
    storage: "knex-umzug",
    storageOptions: {
      context: "default",
      tableName: "migrations",
      connection,
    },
  } as any);
}

export default migratorFactory;
