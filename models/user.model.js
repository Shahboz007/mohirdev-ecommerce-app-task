const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                "Please enter valid email address",
            ],
        },
        password: {
            type: String,
            required: true,
            minLength: 6,
        },
        adminStatus: {
            type: Boolean,
            default: false,
        },
        isActive: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);
