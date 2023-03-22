const knex = require("knex");
const knexfile = require("./knexfile");
// const fetch = require("node-fetch");
const db = knex(knexfile.development);

module.exports = db;

// exports.handler = async function () {
//   const db = knex(knexfile.development);

//   const response = await fetch(db);
//   const data = await response.json();

//   return {
//     statusCode: 200,
//     body: JSON.stringify(data),
//   };
// };
