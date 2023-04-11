const pg = require("pg");

module.exports = {
  development: {
    client: "pg",
    connection: {
      url: "jdbc:postgresql://localhost:5432/list_todo_task",
      database: "list_todo_task",
      user: "mylanoyagha",
      password: "Maximus@1",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
