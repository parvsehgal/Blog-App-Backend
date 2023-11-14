const post = require("../models/postModel");

exports.createPost = async (req, res) => {
  try {
    const { user, content } = req.body;
    const newPost = new post({ user, content });
    newPost.save();
    await res.json(newPost);
  } catch (err) {
    res.status(500).json({ msg: "post creation failed" });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    await post.findByIdAndDelete(id);
    res.status(200).json({ msg: "post deletion sucessfull" });
  } catch (err) {
    res.status(500).json({ msg: "post deletion failed" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ msg: "failed to fetch posts" });
  }
};
