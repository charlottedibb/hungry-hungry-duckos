require("dotenv").config();
const express = require("express");
const knex = require("./db/knex.js");
const app = express();
const apiPort = 3000;
app.use(express.json())

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

app.post("/feedings", async (req, res, next) => {
  try {
    // knex("feedings").insert({ email: "hi@example.com" });
    console.log("req.body is", req.body);
    // res.json(feedings);
    res.send("success!");
  } catch (error) {
    // pass error to default handler
    return next(error);
  }
});

app.listen(apiPort, () => console.log(`api listening on port ${apiPort}`));
