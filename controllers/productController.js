const Cart = require("../models/Cart");
const Product = require("../models/Product");

exports.getProductsPage = async (req, res) => {
  try {
    const products = await Product.find();

    let cartCount = 0;
    if (req.session.user) {
      const cart = await Cart.findOne({ user: req.session.user._id })
        .populate("products.product")
        .exec();

      cartCount = cart?.productCount || 0;
    }

    res.render("products/index", {
      title: "Products Page",
      productsData: products,
      isAuth: Boolean(req.session.user),
      cartCount,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getProductDetailsPage = async (req, res) => {
  try {
    const product = Product.findById(req.params.id);
    res.render("products/details", {
      title: "Products Details",
      productData: product,
    });
  } catch (error) {
    console.log(error);
  }
};
