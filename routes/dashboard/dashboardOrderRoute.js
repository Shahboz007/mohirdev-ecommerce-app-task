const router = require('express').Router();
const { getDashboardOrderPage } = require('../../controllers/dashboard/dashboardOrderController');
const {protected} = require('../../middlewares/auth');
const roleMiddleware = require('../../middlewares/role');

router.get('/', protected, roleMiddleware(['admin']), getDashboardOrderPage)

module.exports = router;