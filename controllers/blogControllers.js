const blogsSchema = require("../models/blogsSchema");
const usersSchema = require("../models/usersSchema");
const jwt = require("jsonwebtoken");

//-only registered users can upload blogs. -guest users can see/get all blogs
exports.getAllBlogs = async (req, res, next) => {
  //populate() to display the core info to the main page
  try {
      const blogs = await blogsSchema
    .find()
    .populate("userId", "firstName lastName image");
  res.send({ success: true, data: blogs });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
  
};

exports.createBlog = async (req, res, next) => {
  //protected route ****
  try {
    const blog = new blogsSchema(req.body);
    await blog.save();

    //to find blogs by Id and push blog to user
    const user = await usersSchema.findById(blog.userId);
    user.blogs.push(blog._id);
    await user.save();
    res.send({ success: true, data: blog });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.updateBlog = async (req, res, next) => {
    try {
        const updatedBlog = await blogsSchema.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
  );

  res.send({ success: true, data: updatedBlog });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
  
};

exports.getBlog = async (req, res) => {
    try {
        const blog = await blogsSchema.findOne({ _id: req.params.id });
  res.send({ success: true, data: blog });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
  
};

exports.deleteBlog = async (req, res) => {
    try {
        const blog = await blogsSchema.findByIdAndDelete(req.params.id);
  res.send({ success: true, data: blog });
    } catch (error) {
        res.send({ success: false, message: error.message });
    }
  
};
