const Class = require("../models/Class");

const indexAll = (req, res) => {
  Class.find({}, (err, classes) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(classes);
  });
};

module.exports = {
  indexAll,
};
