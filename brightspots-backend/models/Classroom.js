const mongoose = require("mongoose");

const classroomSchema = new mongoose.Schema({
  img: String,
  name: String,
  brightspots: [
    {
        value: String,
        teacher: String,
        grade: String,
        img: String,
        action: String,
    },
  ],
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;