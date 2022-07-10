const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  
  name: {
    type: String,
    require: true,
  },
  message:{
    type:String,
    require: true,
  }
  
});

const model = mongoose.model("contact", blogSchema);

  module.exports = model;


