const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
    },

    blogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogSchema",
    },
   
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Comment = mongoose.model("commentSchema", commentSchema);

module.exports = Comment;