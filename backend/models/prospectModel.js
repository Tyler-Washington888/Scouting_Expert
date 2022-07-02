const mongoose = require("mongoose");

const prospectSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    position: String,
    college: String,
    height: String,
    weight: Number,
    age: Number,
    year: String,
    stat1: Number,
    stat2: Number,
    stat3: Number,
    stat4: Number,
    points: Number,
    rebounds: Number,
    assists: Number,
    blocks: Number,
    steals: Number,
    playerComp1: String,
    playerComp2: String,
    playerComp3: String,
    strength1: String,
    strength2: String,
    strength3: String,
    strength4: String,
    description: String,
    pluses: String,
    minuses: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Prospect", prospectSchema);
