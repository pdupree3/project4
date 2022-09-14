const router = require("express").Router();
const classCtrl = require("../controllers/classCtrl.js");

// index
router.get("/", classCtrl.index);

// createClass
router.post("/", classCtrl.createClassroom);

// createbrightspot
router.put("/", classCtrl.createBrightspot);

// show
router.get("/:id", classCtrl.show);

// update
router.put("/:id/edit", classCtrl.update);

// delete
router.put("/:id", classCtrl.delete);

module.exports = router;