const { getProfilePage, getProfileOrdersPage, updateUserData } = require("../controllers/profileController");
const { protected } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", protected, getProfilePage);
router.post("/", protected, updateUserData);
router.get("/orders", protected, getProfileOrdersPage);

module.exports = router;
