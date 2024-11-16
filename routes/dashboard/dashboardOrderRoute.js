const router = require("express").Router();
const {
  getDashboardOrderPage,
  getDashboardOrderDetailsPage,
  changeDashboardOrderStatus,
} = require("../../controllers/dashboard/dashboardOrderController");
const { protected } = require("../../middlewares/auth");
const roleMiddleware = require("../../middlewares/role");

router.get("/", protected, roleMiddleware(["admin"]), getDashboardOrderPage);
router.get(
  "/:id/details",
  protected,
  roleMiddleware(["admin"]),
  getDashboardOrderDetailsPage
);
router.post(
  "/:id/change-status",
  protected,
  roleMiddleware(["admin"]),
  changeDashboardOrderStatus
);

module.exports = router;
