const commentsSchema = require("../models/commentsSchema");
const blogsSchema = require("../models/blogsSchema");
const jwt = require("jsonwebtoken");

//only registered users can write comments on under blogs
exports.createComment = async (req, res) => {
  try {
    const comment = new commentsSchema(req.body);
    await comment.save();

    //to find blogs by Id and push blog to user
    const blog = await blogsSchema.findById(comment.blogId);
    blog.comments.push(comment._id);
    await blog.save();
    res.send({ success: true, data: comment });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.updateComment = async (req, res) => {
  try {
    const updatedComment = await commentsSchema.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.send({ success: true, data: updatedComment });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.getComment = async (req, res) => {
  try {
    const comment = await commentsSchema.findOne({ _id: req.params.id });
    res.send({ success: true, data: comment });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.getComments = async (req, res) => {
  try {
    const comments = await commentsSchema
      .find()
      .populate("userId", "firstName lastName image");
    res.send({ success: true, data: this.comments });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const deletedComment = await commentsSchema.findByIdAndDelete(
      req.params.id
    );
    res.send({ success: true, data: deletedComment });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
