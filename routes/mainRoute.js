const router = require("express").Router();
const {
    getHomePage,
    getDetailsPage,
} = require("../controllers/mainController");

router.get("/", getHomePage);
router.get("/details/:id", getDetailsPage);

module.exports = router;
