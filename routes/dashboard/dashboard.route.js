const {
    getDashboardHomePage,
} = require("../../controllers/dashboard/dashboardHome.controller");
const router = require("express").Router();
const { protected } = require("../../middlewares/auth");

router.get("/", protected, getDashboardHomePage);

module.exports = router;
