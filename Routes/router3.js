const express = require("express");
const router3 = express.Router();
//mongoose model
const model = require("../model/model3");

router3.post("/contact", async (req, res) => {
    const data = new model({
      name: req.body.name,
      message:req.body.message
      
    });
    const data1 = await data.save();
    res.json(data1);
  });
  
module.exports = router3;