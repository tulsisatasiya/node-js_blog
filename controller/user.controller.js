const { user_services } = require("../services");


//add
const addUser = async (req, res) => {
  try {
    console.log(req.file);
    console.log(req.body.f_Name);

    const body = req.body;

      const userExist = await user_services.getUserByName(body.f_Name);
      

    if (userExist) {
      throw new Error("User already exists");
    }

    const user = await user_services.addUser(body);

    if (!user) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "User Created successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//get

const getUser = async (req, res) => {
  try {
    const users = await user_services.getAllUsers(req, res);

    res.status(200).json({
      success: true,
      message: "Successfully fetched all users",
      data: { users },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//delete
const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await user_services.deleteUserById(id);

    if (!user) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//update
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const userExist = await user_services.getUserByName(body.f_Name);

    if (userExist) {
      throw new Error("User already exists");
    }

    const user = await user_services.updateUserById(id, body);

    res.status(200).json({
      message: "User updated successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//login

const Loginuser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    
    const email = req.body.email;
    const password = req.body.password;

    const findUser = await user_services.findUser(email);

    console.log(findUser);

    if (!findUser) {
      res.status(500).json({
        message: "user not found",
      });
    } else {
      if (password === findUser.password) {
        res.status(200).json({
          message: "login success",
          data: findUser,
        });
      } else {
        res.status(500).json({
          message: "invalid password",
        });
      }
    }
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};



module.exports = { addUser, getUser, deleteUser, updateUser,Loginuser };