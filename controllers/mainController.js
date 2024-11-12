const Product = require("../models/Product");
const Cart = require("../models/Cart");
const User = require("../models/User");
exports.getHomePage = async (req, res) => {
  try {
    const products = await Product.find();

    let cartCount = 0;
    if (req.session.user) {
      const cart = await Cart.findOne({ user: req.session.user._id })
        .populate("products.product")
        .exec();
      cartCount = cart.productCount;
    }

    res.render("index", {
      title: "Home page",
      isAuth: Boolean(req.session.user),
      cartCount,
      productsData: products,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getProductsPage = async (req, res) => {
  try {
    const products = await Product.find();

    res.render("products", { title: "Products", products });
  } catch (error) {
    console.log(error);
  }
};

exports.getDetailsPage = async (req, res) => {
  res.render("details", {
    title: "Product details",
    isAuth: Boolean(req.session.user),
  });
};
