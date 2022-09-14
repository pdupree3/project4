require("./connection");
const Class = require("../models/Class");
// const class = require("./seeds.json");
const User = require("../models/User");
const bcrypt = require("bcrypt");

bcrypt.hash("ABC123", 8, (err, hash) => {
  User.deleteMany({})
    .then(() => {
      User.insertMany([
        { name: "PJ", password: hash },
      ])
      .then((users) => {
        console.log(users)
      });
    })
    .then(() => {
      Class.deleteMany({})
        .catch((err) => console.error(err))
        .finally(() => {
          process.exit();
        });
    });
});