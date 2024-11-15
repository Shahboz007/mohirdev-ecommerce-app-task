const Cart = require("../models/Cart");
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

exports.updateUserData = async(req, res) => {
  const {name, email} = req.body
  console.log("🚀 ~ exports.updateUserData=async ~ email:", email)

  try{
    const user = await User.findById(req.session.user._id);
    if(name) user.name = name;
    if(email) user.email = email;

    await user.save();

    res.redirect('/profile');
  }catch(error){
    console.log(error)
  }
}

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
