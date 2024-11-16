const Cart = require("../models/Cart");
const Order = require("../models/Order");
const User = require("../models/User");

exports.getProfilePage = async (req, res) => {
  const user = await User.findById(req.session.user._id);
  const cart = await Cart.findOne({ user: req.session.user._id })
    .populate("products.product")
    .exec();
  const cartCount = cart?.productCount || 0;

  res.render("profile/index", {
    title: "Profile",
    isAuth: Boolean(req.session.user),
    cartCount,
    userData: user,
  });
};

exports.updateUserData = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.findById(req.session.user._id);
    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.redirect("/profile");
  } catch (error) {
    console.log(error);
  }
};

exports.getProfileOrderPage = async (req, res) => {
  const userId = req.session.user._id;

  const cart = await Cart.findOne({ user: userId })
    .populate("products.product")
    .exec();
  const cartCount = cart?.productCount || 0;

  // Orders
  const orders = await Order.find({ user: userId });

  res.render("profile/order", {
    title: "My Orders | Profile",
    isAuth: Boolean(req.session.user),
    cartCount,
    orderData: orders,
  });
};

exports.getProfileOrderDetailsPage = async (req, res) => {
  const userId = req.session.user._id;

  const cart = await Cart.findOne({ user: userId })
    .populate("products.product")
    .exec();
  const cartCount = cart?.productCount || 0;

  // Orders
  const order = await Order.findOne({ user: userId, _id: req.params.id }).populate('products.product').exec();

  console.log('render', order);
  
  res.render("profile/orderDetails", {
    title: "My Orders | Profile",
    isAuth: Boolean(req.session.user),
    cartCount,
    orderData: order,
  });
};
