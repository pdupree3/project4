const User = require("../models/User");
const bcrypt = require("bcrypt");

const login = (req, res) => {
  User.findOne({ name: req.body.name }, (err, user) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    if (!user) {
      res.status(400).json({ msg: "This username does exist" });
      return;
    }
    console.log(req.body.password, user);

    let passwordIsCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (passwordIsCorrect) {
      delete user.password;

      res.json(user);
    } else {
      res.status(204).json({ msg: "Incorrect password" });
      return;
    }
  });
};

module.exports = {
  login,
};
