//router initialization
const express = require("express");
const router1 = express.Router();
//mongoose model
const model = require("../model/model1");
//Post Method
router1.post("/post", async (req, res) => {
  console.log("Inside post function");
  const data = new model({
    photo: req.body.photo,
    project: req.body.project,
    location: req.body.location,
    year: req.body.year,
  });
  const data1 = await data.save();
  res.json(data1);
});

//get all the projects
router1.get("/data", async (req, res) => {
  try {
    const data2 = await model.find();
    res.json(data2);
  } catch (err) {
    res.send("Error" + err);
  }
});

//get particular projects
router1.get("/:id", async (req, res) => {
  try {
    const data1 = await model.findById(req.params.id);
    res.json(data1);
  } catch (err) {
    res.send("Error" + err);
  }
});

//update projects
router1.put("/update/:id", (req, res) => {
  let upid = req.params.id;
  let upphotos = req.body.photo;
  let upproject = req.body.project;
  let upyear = req.body.year;
  let uplocation = req.body.location;
  model.findOneAndUpdate(
    { _id: upid },
    {
      $set: {
        photo: upphotos,
        project: upproject,
        year: upyear,
        location: uplocation,
      },
    },
    { new: true }, //its giving updated value in postman tool
    (err, data) => {
      //console.log(data);
      if (err) {
        res.send("ERROR");
      } else {
        if (data == null) {
          res.send("nothing found");
        } else {
          res.send(data);
        }
      }
    }
  );
});

//delete Method
router1.delete("/delete/:id", (req, res) => {
  let deleteid = req.params.id;
  model.findOneAndDelete({ _id: deleteid }, (err, data) => {
    if (err) {
      res.send("ERROR");
    } else {
      if (data == null) {
        res.send("Wrong Id");
      } else {
        res.json("Deleted");
      }
    }
  });
});
module.exports = router1;
