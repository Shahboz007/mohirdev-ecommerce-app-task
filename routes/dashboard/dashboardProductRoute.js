const router = require("express").Router();
const {
    getProductPage,
    createProduct,
    getCreateProductPage,
    getUpdateProductPage,
    updateProduct,
    deleteProduct,
} = require("../../controllers/dashboard/dashboardProductController");
const roleMiddleware = require("../../middlewares/role");
const {protected} = require("../../middlewares/auth");

router.get("/", protected, roleMiddleware(['admin']), getProductPage);
router.get("/create", protected, roleMiddleware(['admin']), getCreateProductPage);
router.post("/create", protected, roleMiddleware(['admin']), createProduct);
router.get("/:id/update", protected, roleMiddleware(['admin']), getUpdateProductPage);
router.post("/:id/update", protected, roleMiddleware(['admin']), updateProduct);
router.post("/:id/delete", protected, roleMiddleware(['admin']), deleteProduct);

module.exports = router;
