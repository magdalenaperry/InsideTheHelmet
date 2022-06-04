const db = require("../config/connection");
const { User } = require("../models");
const userSeeds = require("./userSeeds.json");
const { Types } = require("mongoose");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
