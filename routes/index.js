const express = require("express");
const routes = express.Router();
const userRoutes = require("./user.route");
const adminRoutes = require("./admin.route");
const blogRoutes = require("./blog.route");
const commentRoutes = require("./comment.route");

//user
routes.use("/user", userRoutes);

//admin
routes.use("/admin", adminRoutes);

//blog
routes.use("/blog", blogRoutes);

//blog
routes.use("/comment", commentRoutes);


module.exports = routes;