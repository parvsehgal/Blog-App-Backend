const post = require("../models/postModel");
const like = require("../models/likeModel");

exports.likePost = async (req, res) => {
  try {
    const Post = req.params.postId;
    const { user } = req.body;
    const newLike = new like({ Post, user });
    const savedLike = await newLike.save();

    const updatedPost = await post
      .findByIdAndUpdate(
        Post,
        { $push: { likes: savedLike._id } },
        { new: true }
      )
      .populate("likes")
      .exec();

    res.json({ likedPost: updatedPost, msg: "liked post sucessfully" });
  } catch (err) {
    res.status(500).json({ msg: "failed to like post" });
  }
};

exports.unlikePost = async (req, res) => {
  try {
    const { likeid, postid } = req.body;
    const deletedlike = await like.findOneAndDelete({
      Post: postid,
      _id: likeid,
    });
    const updatedPost = await post
      .findByIdAndUpdate(
        postid,
        { $pull: { likes: deletedlike._id } },
        { new: true }
      )
      .populate("likes")
      .exec();
    res.json(updatedPost);
  } catch (err) {
    res.status(500).json({ msg: "failed to unLike post" });
  }
};
