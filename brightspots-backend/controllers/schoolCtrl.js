const Classroom = require("../models/Classroom");

const indexAll = (req, res) => {
  Classroom.find({}, (err, school) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(school);
  });
};

module.exports = {
  indexAll,
};
