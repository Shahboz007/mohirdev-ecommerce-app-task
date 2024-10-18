const router = require("express").Router();
const { loginPage, registerPage } = require('../controllers/auth.controller')

router.get("/login", loginPage);
router.get("/register", registerPage);

module.exports = router;
