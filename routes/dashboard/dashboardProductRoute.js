const router = require("express").Router();
const {
    getProductPage,
    createProduct,
    getCreateProductPage,
    getUpdateProductPage,
    updateProduct,
    deleteProduct,
} = require("../../controllers/dashboard/dashboardProductController");

router.get("/", getProductPage);
router.get("/create", getCreateProductPage);
router.post("/create", createProduct);
router.get("/:id/update", getUpdateProductPage);
router.post("/:id/update", updateProduct);
router.post("/:id/delete", deleteProduct);

module.exports = router;
