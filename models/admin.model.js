const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
    admin_name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone_no: {
        type: Number,
    }
});

const Admin = mongoose.model("adminSchema", adminSchema);

module.exports = Admin;
