// Desc      Get login page
// Route     GET /auth/login

const User = require("../models/user.model");

// Access    Public
exports.loginPage = async (req, res) => {
    return res.render("auth/login", { title: "Login" });
};

// Desc      Get register page
// Route     GET /auth/register
// Access    Public
exports.registerPage = async (req, res) => {
    return res.render("auth/register", { title: "Register" });
};
// Desc      Register user
// Route     POST /auth/register
// Access    Public
exports.registerUser = async (req, res) => {
    const { name, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.send("Password and confirm password not match");
    }

    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/profile");
};
