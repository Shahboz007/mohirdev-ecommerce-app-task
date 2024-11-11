const bcrypt = require("bcryptjs");
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
            default: true,
        },
        carts: {
            type: mongoose.Types.ObjectId,
            ref: "Cart",
        },
        orders: {
            type: mongoose.Types.ObjectId,
            ref: "Order",
        },
    },
    {
        timestamps: true,
    }
);

userSchema.virtual('cartCount', {
    ref: "Cart",
    localField: '_id',
    foreignField: 'userId',
    count: true
})

// Hashing password with bcrypt
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
