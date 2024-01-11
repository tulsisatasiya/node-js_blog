const { blog_Scheama } = require("../models");

//Blog services

//add
const addBlog = (body) => {
  return blog_Scheama.create(body);
};

//get valid
const getBlogByName = (title) => {
  return blog_Scheama.findOne({ title });
};
//get
const getAllBlog = async (req, res) => {

  return blog_Scheama.find();
};
//delete
const deleteBlog = (id) => {
  return blog_Scheama.findByIdAndDelete(id);
};

//update
const updateBlog = (id, body) => {
  return blog_Scheama.findByIdAndUpdate(id, { $set: body });
};

module.exports = { addBlog, getBlogByName, getAllBlog, deleteBlog, updateBlog };