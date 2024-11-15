const { getProfilePage, getProfileOrdersPage } = require("../controllers/profileController");
const { protected } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", protected, getProfilePage);
router.get("/orders", protected, getProfileOrdersPage);

module.exports = router;
