const router = require("express").Router();
const {
    getProductPage,
    createProduct,
    getCreateProductPage,
} = require("../../controllers/dashboard/dashboardProductController");

router.get("/", getProductPage);
router.get("/create", getCreateProductPage);
router.post("/create", createProduct);

module.exports = router;
