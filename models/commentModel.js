const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({
  Post: {
    type: mongoose.Types.ObjectId,
    ref: "post",
  },
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("comment", commentModel);
