const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  
  logourl: {
    type: String,
    require: true,
  }
  
});

const model = mongoose.model("Clientlogo", blogSchema);

  module.exports = model;


