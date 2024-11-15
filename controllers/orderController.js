const Cart = require("../models/Cart");
const Order = require("../models/Order");

exports.getOrderCheckoutPage = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.session.user._id })
      .populate("products.product")
      .exec();

    if (!cart) return res.redirect("/carts");

    const cartCount = cart?.productCount || 0;

    res.render("checkout", {
      title: "Checkout",
      isAuth: Boolean(req.session.user),
      cartCount,
      totalPrice: cart.totalPrice,
      cartProducts: cart.products,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.createNewOrder = async (req, res) => {
  const { address } = req.body;

  const redirectUrl = req.get("Referer") || "/";

  try {
    const cart = await Cart.findOne({ user: req.session.user._id })
      .populate("products.product")
      .exec();
    if (!cart) return res.redirect(redirectUrl);

    const totalAmount = cart?.productCount || 0;
    const totalPrice = cart?.totalPrice || 0;

    await Order.create({
      user: req.session.user._id,
      products: cart.products,
      totalAmount,
      totalPrice,
      address,
    });

    await Cart.findByIdAndDelete(cart._id);

    res.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
  }
};
