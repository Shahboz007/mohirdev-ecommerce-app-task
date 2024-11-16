const router = require('express').Router();
const { getDashboardOrderPage, getDashboardOrderDetailsPage } = require('../../controllers/dashboard/dashboardOrderController');
const {protected} = require('../../middlewares/auth');
const roleMiddleware = require('../../middlewares/role');

router.get('/', protected, roleMiddleware(['admin']), getDashboardOrderPage)
router.get('/:id/details', protected, roleMiddleware(['admin']), getDashboardOrderDetailsPage)

module.exports = router;