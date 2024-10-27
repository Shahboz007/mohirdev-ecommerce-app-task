const {getDashboardHomePage} = require("../../controllers/dashboard/dashboardHome.controller");
const router = require('express').Router();

router.get('/', getDashboardHomePage)

module.exports = router;