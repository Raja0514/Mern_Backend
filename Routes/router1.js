const express = require("express");
const router1 = express.Router();
//mongoose model
const model = require("../model/model1");

router1.get("/data", async (req, res) => {
    const data2 = await model.find();
    res.json(data2);
  });
  router1.get("/:id", async (req, res) => {
    const data1 = await model.findById(req.params.id);
    res.json(data1);
  });

  router1.delete("data/year", async (req, res) => {
    const data3 = await model.find();
    res.json(data3);
  });


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

  


  // router1.patch("/data", async (req, res) => {
  //   const data2 = await model.find();
  //   res.json(data2);
  // });

  // router1.delete("/data", async (req, res) => {
  //   const data2 = await model.find();
  //   res.json(data2);
  // });






  module.exports = router1;