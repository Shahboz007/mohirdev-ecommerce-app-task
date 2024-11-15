const Cart = require("../models/Cart");

exports.getProfilePage = async (req, res) => {
  const cart = await Cart.findOne({ user: req.session.user._id })
    .populate("products.product")
    .exec();
  const cartCount = cart?.productCount || 0;

  res.render("profile/index", {
    title: "Profile",
    isAuth: Boolean(req.session.user),
    cartCount,
  });
};

exports.getProfileOrdersPage = async (req, res) => {
  const cart = await Cart.findOne({ user: req.session.user._id })
    .populate("products.product")
    .exec();
  const cartCount = cart?.productCount || 0;

  res.render("profile/order", {
    title: "My Orders | Profile",
    isAuth: Boolean(req.session.user),
    cartCount,
  });
};
