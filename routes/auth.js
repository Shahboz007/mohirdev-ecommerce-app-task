const router = require("express").Router();

router.get("/login", (req, res) => {
    return res.render("auth/login", { title: "Login" });
});
router.get("/register", (req, res) => {
    return res.render("auth/register", { title: "Register" });
});

module.exports = router;
