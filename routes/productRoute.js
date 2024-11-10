const {getProductsPage, getProductDetailsPage} = require("../controllers/productController");
const router = require('express').Router();

router.get('/', getProductsPage);
router.get('/:id/details', getProductDetailsPage)

module.exports = router;