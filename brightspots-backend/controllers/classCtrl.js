const Classroom = require("../models/Classroom");
// const Whip = require("../models/");

const index = (req, res) => {
  console.log(req.body);
  Classroom.findOne({ teacher: req.query.teacher }, (err, classroom) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(classroom);
  });
};

const createClassroom = async (req, res) => {
  let newClass = await Classroom.create(req.body);

  res.json(newClassroom);
};

const createBrightspot = (req, res) => {
  console.log("create function is hit");
  Classroom.updateOne(
    { _id: req.body.classroomId },
    {
      $push: {
        brightspots: {
          value: req.body.value,
          teacher: req.body.teacher,
          grade: req.body.grade,
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
  Classroom.findById(req.body.classroomId, (err, classroom) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    let brightspot = classroom.brightspots.id(req.params.id);

    res.json(brightspot);
    

  });
};

const update = (req, res) => {
  Classroom.findById(req.body.classroomId, (er, classroom) => {
    if (er) {
      res.status(400).json(er);
      return;
    }
    let brightspots = classroom.brightspots;
    console.log(brightspots);
    brightspots.forEach((b) => {
      if (b._id == req.params.id) {
        b.value = req.body.value;
        b.teacher = req.body.teacher;
        b.grade = req.body.grade;
        b.action = req.body.action;
        b.img = req.body.img;
      }
    });
    classroom.save();
  });
};

function deleteBrightspot(req, res) {
  console.log(req.params.id);
  console.log(req.body.classroomId);
  Classroom.findByIdAndUpdate(
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
