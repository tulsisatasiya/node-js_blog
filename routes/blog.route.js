const express = require("express");
const validate = require("../middleware/validate");
const { blog_validation } = require("../validation");
const { blog_controller } = require("../controller");
const route = express.Router();

route.post("/add",validate(blog_validation.blogValidation), blog_controller.addBlog);
route.get("/get", blog_controller.getAllBlog);
route.delete("/delete/:id", blog_controller.deleteBlog);
route.put("/update/:id",validate(blog_validation.blogValidation),blog_controller.updateBlog);


module.exports = route;