const express = require("express");

const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("We are on post");
});

module.exports = router;
