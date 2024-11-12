const { getCartPage, addToCart, decrementFromCart } = require("../controllers/cartController");
const { protected } = require("../middlewares/auth");

const router = require("express").Router();

router.get("/", protected, getCartPage);
router.post("/", protected, addToCart);
router.post("/decrement", protected, decrementFromCart);

module.exports = router;
