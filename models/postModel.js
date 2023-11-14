const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "like",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comment",
    },
  ],
});

module.exports = mongoose.model("post", postSchema);
