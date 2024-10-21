// Desc      Get login page
// Route     GET /auth/login

const { validationResult } = require("express-validator");
const User = require("../models/user.model");

// Access    Public
exports.loginPage = async (req, res) => {
    return res.render("auth/login", { title: "Login" });
};

// Desc      Get register page
// Route     GET /auth/register
// Access    Public
exports.registerPage = async (req, res) => {
    return res.render("auth/register", { title: "Register", oldInput: null });
};
// Desc      Register user
// Route     POST /auth/register
// Access    Public
exports.registerUser = async (req, res) => {
    const { name, email, password, confirm_password } = req.body;
    const error = validationResult(req);

    if (!error.isEmpty()) {
        return res.status(400).render("auth/register", {
            title: "Register",
            oldInput: {
                name,
                email,
                password,
                confirm_password,
            },
        });
    }

    if (password !== confirm_password) {
        req.flash("error_msg", "Password and confirm password not match");
        return res.status(400).render("auth/register", {
            title: "Register",
            errorMsg: req.flash('error_msg'),
            oldInput: {
                name,
                email,
                password,
                confirm_password,
            },
        });
    }

    await User.create({
        name,
        email,
        password,
    });

    return res.redirect("/profile");
};
