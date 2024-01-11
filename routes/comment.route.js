const express = require("express");
const validate = require("../middleware/validate");
const { comment_validation } = require("../validation");
const { comment_controller } = require("../controller");
const route = express.Router();

route.post("/add",validate(comment_validation.commentValidation), comment_controller.addcomment);
route.get("/get", comment_controller.getcomment);
route.delete("/delete/:id", comment_controller.deletecomment);
route.put("/update/:id",validate(comment_validation.commentValidation),comment_controller.updatecomment);


module.exports = route;