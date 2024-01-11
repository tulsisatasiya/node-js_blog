const express = require("express");
const validate = require("../middleware/validate");
const { user_validation } = require("../validation");
const { user_controller } = require("../controller");
const { upload } = require("../middleware/multer");
const route = express.Router();

route.post("/add", upload.single("profile_picture"),validate(user_validation.userValidation), user_controller.addUser);
route.get("/get", user_controller.getUser);
route.delete("/delete/:id", user_controller.deleteUser);
route.put("/update/:id",validate(user_validation.userValidation),user_controller.updateUser);


//login
route.post("/login", user_controller.Loginuser);
module.exports = route;