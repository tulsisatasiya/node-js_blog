const express = require("express");
const validate = require("../middleware/validate");
const { admin_validation } = require("../validation");
const { admin_controller } = require("../controller");
const route = express.Router();

route.post("/add", validate(admin_validation.addadminvalid), admin_controller.addAdmin);
route.get("/get", admin_controller.getAdmin);
route.delete("/delete/:id", admin_controller.deleteAdmin);
route.put("/update/:id",validate(admin_validation.addadminvalid),admin_controller.updateAdmin);

module.exports = route;