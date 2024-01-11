const { blog_services } = require("../services");

// add
const addBlog = async (req, res) => {
  try {
    const body = req.body;

    const BlogExist = await blog_services.getBlogByName(body.title);

    if (BlogExist) {
      throw new Error("Blog already exists");
    }

    const Blog = await blog_services.addBlog(body);

    if (!Blog) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "Blog Created successfully",
      data: Blog,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// get all
const getAllBlog = async (req, res) => {
  try {
    const Blogs = await blog_services.getAllBlog();

    res.status(200).json({
      success: true,
      message: "Successfully fetched all Blogs",
      data: { Blogs },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete
const deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;

    const Blog = await blog_services.deleteBlog(id);

    if (!Blog) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "Blog deleted successfully",
      data: Blog,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// update
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const BlogExist = await blog_services.getBlogByName(body.title);

    if (BlogExist) {
      throw new Error("Blog already exists");
    }

    const Blog = await blog_services.updateBlog(id, body);

    res.status(200).json({
      message: "Blog updated successfully",
      data: Blog,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addBlog, getAllBlog, deleteBlog, updateBlog };
