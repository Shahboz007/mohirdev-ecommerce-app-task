const router = require("express").Router();
const { loginPage, registerPage, registerUser } = require('../controllers/auth.controller')

router.get("/login", loginPage);
router.get("/register", registerPage);
router.post("/register", registerUser);

module.exports = router;
