const express = require("express");
const { getAllBlogs, createBlog, updateBlog, getBlog, deleteBlog } = require("../controllers/blogControllers");
const { auth } = require("../middleware/auth");

const router = express.Router()

router.get("/", getAllBlogs)

router.get("/:id", getBlog)

router.post("/", auth, createBlog)

router.put("/:id", auth, updateBlog)

router.delete("/:id", auth, deleteBlog)






module.exports = router