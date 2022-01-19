const express = require("express");
const { updateComment, getComment, getComments, deleteComment, createComment } = require("../controllers/commentsControllers");
// const { createComment } = require("../models/commentsSchema");
// const { post } = require("../routes/blogRoutes");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.post("/", auth, createComment)

router.put("/:id", auth,  updateComment)

router.get("/:id", getComment)

router.get("/", getComments)

router.delete("/:id", auth,  deleteComment)

module.exports = router