const router = require("express").Router();
const classesCtrl = require("../controllers/classesCtrl");

// index all classes
router.get("/", classesCtrl.indexAll);

module.exports = router;