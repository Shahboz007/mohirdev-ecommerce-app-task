const { getProfilePage, getProfileOrderPage, updateUserData, getProfileOrderDetailsPage } = require("../controllers/profileController");
const { protected } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", protected, getProfilePage);
router.post("/", protected, updateUserData);
router.get("/orders", protected, getProfileOrderPage);
router.get("/orders/:id/details", protected, getProfileOrderDetailsPage);

module.exports = router;
