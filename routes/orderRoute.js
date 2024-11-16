const router = require('express').Router();
const { getOrderCheckoutPage, createNewOrder } = require('../controllers/orderController');
const {protected} = require('../middlewares/auth');

router.get('/checkout', protected, getOrderCheckoutPage);
router.post('/checkout', protected, createNewOrder);

module.exports = router;