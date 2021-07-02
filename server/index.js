require("dotenv").config();
const express = require("express");
const cors = require("cors");
const knex = require("./db/knex.js");
const app = express();
const apiPort = 3000;
app.use(express.json());
app.use(cors());

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
        "longitude",
        "feeding_time"
      );
    res.json(feedings);
  } catch (error) {
    // pass error to default handler
    return next(error);
  }
});

app.post("/feedings", async (req, res, next) => {
  try {
    const {
      latitude,
      longitude,
      duckCount: duck_count,
      foodType: food_type,
      foodAmount: food_amount,
      feedingTime: feeding_time
    } = req.body;
    await knex("feedings").insert({
      latitude,
      longitude,
      duck_count,
      food_type,
      food_amount,
      feeding_time
    });
    res.send("success!");
  } catch (error) {
    // pass error to default handler
    return next(error);
  }
});

app.listen(apiPort, () => console.log(`api listening on port ${apiPort}`));
