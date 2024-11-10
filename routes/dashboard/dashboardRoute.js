const {
    getDashboardHomePage,
} = require("../../controllers/dashboard/dashboardHomeController");
const router = require("express").Router();
const { protected } = require("../../middlewares/auth");
const roleMiddleware = require("../../middlewares/role");

router.get("/", protected, roleMiddleware(['admin']), getDashboardHomePage);

module.exports = router;
