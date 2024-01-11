const { admin_Scheama } = require("../models");

//Admin services

//add
const addAdmin = (body) => {
  return admin_Scheama.create(body);
};

//get valid
const getAdminByName = (email) => {
  return admin_Scheama.findOne({ email });
};
//get
const getAllAdmin = async (req, res) => {
  return admin_Scheama.find();
};
//delete
const deleteAdmin = (id) => {
  return admin_Scheama.findByIdAndDelete(id);
};
//update
const updateAdmin = (id, body) => {
  return admin_Scheama.findByIdAndUpdate(id, { $set: body });
};

module.exports = {addAdmin, getAdminByName, getAllAdmin,deleteAdmin,updateAdmin,
};
