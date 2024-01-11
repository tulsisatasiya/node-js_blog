const { comment_Scheama } = require("../models");

//add
const addComment = (body) => {
  return comment_Scheama.create(body);
};

//get
const getComment = async (req, res) => {
  return comment_Scheama.find().populate('blogs');
};
//delete
const deleteComment = (id) => {
  return comment_Scheama.findByIdAndDelete(id);
};

//update
const updateComment = (id, body) => {
  return comment_Scheama.findByIdAndUpdate(id, { $set: body });
};

module.exports = { addComment, getComment, deleteComment, updateComment };