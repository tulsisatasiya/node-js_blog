const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    profile_picture:{
        type: String,
    },
    f_Name: {
        type: String,
    },
    l_Name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    age: {
        type: Number,
    },
    phone_no: {
        type: Number,
    },
    address: {
        street: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        zipCode: {
            type: String,
        },
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "adminSchema",
    },
    blogs: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "blogSchema",
    }
});

const User = mongoose.model("userSchema", userSchema);

module.exports = User;
