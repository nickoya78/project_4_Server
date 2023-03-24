const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("../db");
const serverless = require("serverless-http");
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get("/", (req, res) => {
  knex
    .select()
    .from("todo")
    .then((todo) => {
      res.send(todo);
    });
});

router.get("/:id", (req, res) => {
  knex
    .select()
    .from("todo")
    .where("todo_id", req.params.id)
    .then((todo) => {
      res.send(todo);
    });
});

router.post("/", (req, res) => {
  const { name } = req.body;
  knex.raw("insert into todo(name) values(?)", [name]).then(() => {
    knex
      .select()
      .from("todo")
      .then((todo) => {
        res.send(todo);
      });
  });
});

router.put("/:id", (req, res) => {
  knex("todo")
    .where("todo_id", req.params.id)
    .update("name", req.body.name)
    .then(() => {
      knex
        .select()
        .from("todo")
        .then((todo) => {
          res.send(todo);
        });
    });
});

router.delete("/:id", (req, res) => {
  knex("todo")
    .where("todo_id", req.params.id)
    .delete()
    .then(() => {
      knex
        .select()
        .from("todo")
        .then((todo) => {
          res.send(todo);
        });
    });
});

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
