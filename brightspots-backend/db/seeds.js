require("./connection");
const Classroom = require("../models/Classroom");
// const class = require("./seeds.json");
const User = require("../models/User");
const bcrypt = require("bcrypt");

bcrypt.hash("ABC123", 8, (err, hash) => {
  User.deleteMany({})
    .then(() => {
      return User.insertMany([
        { name: "PJ", password: hash },
        { name: "James", password: hash},
      ])
      .then((users) => {
        console.log(users)
      });
    })
    .then(() => {
      Classroom.deleteMany({})
        .catch((err) => console.error(err))
        .finally(() => {
          process.exit();
        });
    });
});