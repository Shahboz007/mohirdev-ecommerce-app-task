const router = require("express").Router();
const {
    getReportPage,
} = require("../../controllers/dashboard/dashboardReportController");
const roleMiddleware = require("../../middlewares/role");
const {protected} = require("../../middlewares/auth");

router.get("/", protected, roleMiddleware(['admin']), getReportPage);

module.exports = router;
