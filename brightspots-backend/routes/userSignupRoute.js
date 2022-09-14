const router = require("express").Router();
const userSignupCtrl = require("../controllers/userSignupCtrl");

router.post("/", userSignupCtrl.signup);

module.exports = router;