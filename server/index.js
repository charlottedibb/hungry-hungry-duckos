require("dotenv").config();
const express = require("express");
const knex = require("./db/knex.js");
const app = express();
const apiPort = 3000;

app.get("/", (req, res) => res.send("hi"));

app.get("/feedings", async (req, res, next) => {
  try {
    const feedings = await knex
      .from("feedings")
      .select(
        "duck_count",
        "food_type",
        "food_amount",
        "latitude",
        "longitude"
      );
    res.json(feedings);
  } catch (error) {
    // pass error to default handler
    return next(error);
  }
});

app.listen(apiPort, () => console.log(`api listening on port ${apiPort}`));
