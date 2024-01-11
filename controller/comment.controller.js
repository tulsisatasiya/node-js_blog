const { comment_services } = require("../services");

// add
const addcomment = async (req, res) => {
  try {
    const body = req.body;

    const comment = await comment_services.addComment(body);

    if (!comment) {
      throw new Error("Something went wrong");
    }

    res.status(201).json({
      message: "comment Created successfully",
      data: comment,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// get all
const getcomment = async (req, res) => {
    try {
      
    const comment = await comment_services.getComment();

    res.status(200).json({
      success: true,
      message: "Successfully fetched all comment",
      data: { comment },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// delete
const deletecomment = async (req, res) => {
  try {
    const id = req.params.id;

    const comment = await comment_services.deleteComment(id);

    if (!comment) {
      throw new Error("Something went wrong");
    }

    res.status(200).json({
      message: "comment deleted successfully",
      data: comment,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// update
const updatecomment = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const comment = await comment_services.updateBlog(id, body);

    res.status(200).json({
      message: "comment updated successfully",
      data: comment,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

module.exports = { addcomment, getcomment, deletecomment, updatecomment };
