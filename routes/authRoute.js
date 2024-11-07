const router = require("express").Router();
const { body } = require("express-validator");
const {
  loginPage,
  registerPage,
  registerUser,
  loginUser,
  logout,
} = require("../controllers/authController"); 
const {protected} = require('../middlewares/auth');

router.get("/login", loginPage);
router.post("/login", loginUser);
router.get("/register", registerPage);
router.post(
  "/register",
  [
    body("email", "Pease add valid email address").isEmail(),
    body("name", "Name can contain only alphabetical characters").isAlpha(),
    body(
      "password",
      "Please enter password with minimum 6 characters values"
    ).isLength({ min: 6 }),
    // body("confirmPassword", "Password do not match").custom(
    //     (value, { req }) => {
    //         if (value !== req.body.password) {
    //             throw new Error("Password must match");
    //         }
    //         return true;
    //     }
    // ),
  ],
  registerUser
);
router.get("/logout", protected, logout);

module.exports = router;
