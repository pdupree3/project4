const mongoose = require("mongoose");

const brightspotSchema = new mongoose.Schema({
  value: String,
  teacher: String,
  grade: String,
  img: String,
  action: String,
});

const Brightspot = mongoose.model("Brightspot", brightspotSchema);

module.exports = Brightspot;