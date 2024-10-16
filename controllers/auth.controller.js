// Desc      Get login page
// Route     GET /auth/login
// Access    Public
exports.login = async (req, res) => {
    return res.render("auth/login", { title: "Login" });
};

// Desc      Get register page
// Route     GET /auth/register
// Access    Public
exports.register = async (req, res) => {
    return res.render("auth/register", { title: "Register" });
};
