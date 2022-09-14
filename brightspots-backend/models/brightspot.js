const mongoose = require("mongoose");

const brightspotSchema = new mongoose.Schema({
  classname: String,
  teacher: String,
  student: String,
  action: String,
  img: String,
});

const Brightspot = mongoose.model("Brightspot", brightspotSchema);

module.exports = Brightspot;