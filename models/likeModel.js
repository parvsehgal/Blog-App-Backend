const mongoose = require("mongoose");

const likeModel = new mongoose.Schema({
  Post: {
    type: mongoose.Types.ObjectId,
    ref: "post",
  },
  user: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("like", likeModel);
