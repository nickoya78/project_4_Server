const knex = require("knex");
// import knex from "knex";
const knexfile = require("../../knexfile");
// const fetch = require("node-fetch");
const db = knex(knexfile.development);

module.exports = db;

// exports.handler = async function (event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(),
//   };
// };
