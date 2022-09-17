const Class = require("../models/Class");
// const Whip = require("../models/");

const index = (req, res) => {
  console.log(req.body);
  Class.findOne({ teacher: req.query.teacher }, (err, classroom) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(classroom);
  });
};

const createClassroom = async (req, res) => {
  let newClass = await Class.create(req.body);

  res.json(newClass);
};

const createBrightspot = (req, res) => {
  console.log("create function is hit");
  Class.updateOne(
    { _id: req.body.classId },
    {
      $push: {
        brightspots: {
          classname: req.body.classname,
          teacher: req.body.teacher,
          student: req.body.student,
          action: req.body.action,
          img: req.body.img,
        },
      },
    },
    (err, classroom) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.json(classroom);
      console.log(classroom);
    }
  );
};

const show = (req, res) => {
  Class.findById(req.body.classroomId, (err, classroom) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    let brightspots = classroom.brightspots.id(req.params.id);

    res.json(brightspots);
    // classroom.save(err => err)
    // res.redirect('/classroom')
  });
};

const update = (req, res) => {
  Class.findById(req.body.classroomId, (er, classroom) => {
    if (er) {
      res.status(400).json(er);
      return;
    }
    let brightspots = classroom.brightspots;
    console.log(brightspots);
    brightspots.forEach((w) => {
      if (w._id == req.params.id) {
        w.classname = req.body.classname;
        w.teacher = req.body.teacher;
        w.student = req.body.student;
        w.action = req.body.action;
        w.img = req.body.img;
      }
    });
    classroom.save();
  });
};

function deleteBrightspot(req, res) {
  console.log(req.params.id);
  console.log(req.body.classroomId);
  Class.findByIdAndUpdate(
    req.body.classroomId,
    { $pull: { brightspots: { _id: req.params.id } } },
    { new: true }
  ).then((classroom, err) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    console.log(err, classroom);
    res.json("success!");
  });
}

module.exports = {
  index,
  createBrightspot,
  show,
  update,
  delete: deleteBrightspot,
  createClassroom,
};
