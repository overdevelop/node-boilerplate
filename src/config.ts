import {resolve} from 'path';

const pathConfig = {
  migrations: {
    directory: resolve(__dirname, "infrastructure", "database", "migrations"),
  },
  seeds: {
    directory: resolve(__dirname, "infrastructure", "database", "seeds"),
  },
};

export default {
  database: {
    development: {
      client: "pg",
      connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "postgres",
        database: "postgres",
      },
      debug: true,
      useNullAsDefault: true,
      ...pathConfig,
    },
  }
}