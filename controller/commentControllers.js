const post = require("../models/postModel");
const comment = require("../models/commentModel");

exports.commentOnPost = async (req, res) => {
  try {
    const { Post, user, content } = req.body;
    const newComment = new comment({ Post, user, content });
    const savedComment = await newComment.save();
    const updatedPost = await post
      .findByIdAndUpdate(
        Post,
        { $push: { comments: savedComment._id } },
        { new: true }
      )
      .populate("comments")
      .exec();
    res.json(updatedPost);
  } catch (err) {
    res.json({ msg: "failed to comment on post" });
  }
};

exports.removeComment = async (req, res) => {
  try {
    const { commentid, postid } = req.body;
    const deletedcomment = await comment.findOneAndDelete({
      Post: postid,
      _id: commentid,
    });
    const updatedPost = await post
      .findByIdAndUpdate(
        postid,
        { $pull: { comments: deletedcomment._id } },
        { new: true }
      )
      .populate("comments")
      .exec();
    res.json(updatedPost);
  } catch (err) {
    res.json({ msg: "failed to remove comment" });
  }
};
