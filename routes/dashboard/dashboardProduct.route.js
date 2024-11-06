const router = require("express").Router();
const {
    getProductPage,
} = require("../../controllers/dashboard/dashboardProductController");

router.get("/", getProductPage);

module.exports = router;
