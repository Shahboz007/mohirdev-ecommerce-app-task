const {
    getDashboardHomePage, getDashboardSettingsPage, updateDashboardUser, updateDashboardUserPassword,
} = require("../../controllers/dashboard/dashboardHomeController");
const router = require("express").Router();
const { protected } = require("../../middlewares/auth");
const roleMiddleware = require("../../middlewares/role");

router.get("/", protected, roleMiddleware(['admin']), getDashboardHomePage);
router.get("/settings", protected, roleMiddleware(['admin']), getDashboardSettingsPage);
router.post('/settings', protected, roleMiddleware(['admin']), updateDashboardUser)
router.post('/settings/password', protected, roleMiddleware(['admin']), updateDashboardUserPassword)

module.exports = router;
