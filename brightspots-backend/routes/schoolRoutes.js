const router = require("express").Router();
const schoolCtrl = require("../controllers/schoolCtrl");

// index all classes
router.get("/", schoolCtrl.indexAll);

module.exports = router;