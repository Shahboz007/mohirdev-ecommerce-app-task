const { validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Desc      Get login page
// Route     GET /auth/login
// Access    Public
exports.loginPage = async (req, res) => {
    return res.render("auth/login", { title: "Login" });
};

// Desc      User login
// Route     POST /auth/login
// Access    Protected
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const isAuthenticated = req.session.isLogged;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).render("auth/login", {
                title: "Login",
                isAuthenticated,
                errorMessage: errors.array()[0].msg,
                oldInput: {
                    email,
                },
            });
        }

        const userExist = await User.findOne({ email });
        if (userExist) {
            const matchPassword = await bcrypt.compare(
                password,
                userExist.password
            );
            if (matchPassword) {
                req.session.isLogged = true;
                req.session.user = userExist;
                req.session.save((err) => {
                    if (err) throw err;
                    return res.redirect("/dashboard");
                });
            } else {
                req.flash("error", "You entered wrong email or password");
                return res.status(400).render("auth/login", {
                    title: "Login",
                    isAuthenticated,
                    errorMessage: req.flash("error"),
                    oldInput: {
                        email: req.body.email,
                    },
                });
            }
        } else {
            req.flash("error", "You entered wrong email or password");
            return res.redirect("/auth/login");
        }
    } catch (error) {
        console.log(error);
    }
};

// Desc      Get register page
// Route     GET /auth/register
// Access    Public
exports.registerPage = async (req, res) => {
    return res.render("auth/register", {
        title: "Register",
        errorMsg: "",
        oldInput: null,
    });
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
            errorMsg: error.array()[0].msg,
            oldInput: {
                name,
                email,
                password,
                confirm_password,
            },
        });
    }

    if (password !== confirm_password) {
        req.flash("errorMsg", "Password and confirm password not match");
        return res.status(400).render("auth/register", {
            title: "Register",
            errorMsg: req.flash("errorMsg"),
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
