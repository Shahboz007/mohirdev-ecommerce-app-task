const router = require("express").Router();
const {
    getReportPage,
} = require("../../controllers/dashboard/dashboardReportController");

router.get("/", getReportPage);

module.exports = router;
