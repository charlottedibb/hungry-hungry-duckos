require("dotenv").config();
const express = require("express");
const knex = require("./db/knex.js");
const app = express();
const apiPort = 3000;

app.get("/", (req, res) => res.send("hi"));

app.listen(apiPort, () => console.log(`api listening on port ${apiPort}`));
