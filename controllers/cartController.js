const Cart = require("../models/Cart");

exports.getCartPage = async (req, res) => {
  try {
    const userId = req.session.user._id;
    const cart = await Cart.findOne({ user: userId }).populate(
      "products.product"
    );
    res.render("cart", {
      title: "My cart",
      cart,
      cartCount: 0,
      isAuth: Boolean(req.session.user),
    });
  } catch (error) {
    console.log(error);
  }
};
exports.addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;

  try {
    const userId = req.user._id;
    let cart = await Cart.findOne({ user: userId });

    if (!cart) {
      cart = new Cart({
        user: userId,
        products: [{ product: productId, quantity }],
      });
    } else {
      const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
      );

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ product: productId, quantity });
      }
    }

    await cart.save();
    res.redirect("back");
  } catch (error) {
    console.log(error);
  }
};
exports.removeFromCart = async (req, res) => {};
exports.clearCart = async (req, res) => {};
