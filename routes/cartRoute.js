const { getCartPage, addToCart } = require("../controllers/cartController");
const { protected } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", protected, getCartPage);
router.post("/", protected, addToCart);

module.exports = router;
