const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
  photo: {
    type: String,
    require: true,
  },
  project: {
    type: String,
    require: true,
  },
  location: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
    require: true,
  }
  
});
const model = mongoose.model("Projects", blogSchema);
module.exports = model;


