const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    author_details: {
        name: {
            type: String,
        },
        bio: {
            type: String,
        },
        email: {
            type: String,
        },
        social_media: {
            twitter :{
                type: String,
            },
            facebook :{
                type: String,
            },
        },
    },
    
});

const Blog = mongoose.model("blogSchema", blogSchema);

module.exports = Blog;
