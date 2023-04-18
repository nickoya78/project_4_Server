// const pg = require("pg");

module.exports = {
  development: {
    client: "postgresql",
    connection:
      "postgres://kdbxpkzd:sZuat_JKcqtDMbKLSjncECfKtoueExUo@mahmud.db.elephantsql.com/kdbxpkzd",
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
