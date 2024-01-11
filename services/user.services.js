const { user_Scheama } = require("../models");

//user services

//add
const addUser = (body) => {
  return user_Scheama.create(body);
};

//get valid
const getUserByName = (f_Name) => {
  return user_Scheama.findOne({ f_Name });
};
//get
const getAllUsers = async (req, res) => {
  return user_Scheama.find().populate('admin').populate('blogs');
  // return user_Scheama.find();
};
//delete
const deleteUserById = (id) => {
  return user_Scheama.findByIdAndDelete(id);
};
//update
const updateUserById = (id, body) => {
  return user_Scheama.findByIdAndUpdate(id, { $set: body });
};
//find
const findUser = (email) => {
  return user_Scheama.findOne({ email: email });
};

module.exports = {addUser, getUserByName, getAllUsers,deleteUserById,updateUserById,findUser
};
