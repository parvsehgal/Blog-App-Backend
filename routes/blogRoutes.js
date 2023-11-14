const express = require("express");
const router = express.Router();
const {
  createPost,
  deletePost,
  getPosts,
} = require("../controller/postControllers");
const {
  commentOnPost,
  removeComment,
} = require("../controller/commentControllers");
const { likePost, unlikePost } = require("../controller/likeControllers");
router.post("/createPost/", createPost);
router.delete("/deletePost/:id", deletePost);
router.get("/getposts", getPosts);
router.post("/like/:postId", likePost);
router.post("/unlike", unlikePost);
router.post("/comment", commentOnPost);
router.post("/remcomment", removeComment);

module.exports = router;
