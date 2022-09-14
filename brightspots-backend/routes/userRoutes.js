const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl.js");

// index
router.post("/", userCtrl.login);

module.exports = router;