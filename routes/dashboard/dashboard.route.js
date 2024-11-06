const {
    getDashboardHomePage,
} = require("../../controllers/dashboard/dashboardHomeController");
const router = require("express").Router();
const { protected } = require("../../middlewares/auth");

router.get("/", protected, getDashboardHomePage);

module.exports = router;
