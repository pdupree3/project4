const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
  img: String,
  name: String,
  class: [
    {
        classname: String,
        teacher: String,
        roomnumber: String,
        mascot: String,
    },
  ],
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;