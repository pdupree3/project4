const User = require("../models/User");
const Classroom = require("../models/Classroom");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  let user = await User.findOne({ name: req.body.name });
  if (user) {
    res.json(`this user already exists`);
  } else {
    bcrypt.hash(`${req.body.password}`, 8, (err, hash) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      User.create({ name: req.body.name, password: hash }).then((user) => {
        res.json(user);
        Classroom.create({
          teacher: user._id,
          name: `${user.name}'s Classroom`,
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9vs_p9MrrBh5YwyIej8h8ZW7oAhgJ2HBayVmRw47XeaIeg-t6yMoxox8N3QXjSdev-J0&usqp=CAU",
        });
      });
    });
  }
};

module.exports = {
  signup,
};
