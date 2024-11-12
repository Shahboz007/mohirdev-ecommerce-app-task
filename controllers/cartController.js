const Cart = require("../models/Cart");

exports.getCartPage = async (req, res) => {
  try {
    const userId = req.session.user._id;
    const cart = await Cart.findOne({ user: userId })
      .populate("products.product")
      .exec();

    res.render("cart", {
      title: "My cart",
      cart,
      cartCount: cart.productCount,
      isAuth: Boolean(req.session.user),
    });
  } catch (error) {
    console.log(error);
  }
};
exports.addToCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;

  try {
    const userId = req.session.user?._id;
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

    const redirectUrl = req.get("Referer") || "/";
    res.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
  }
};
exports.decrementFromCart = async (req, res) => {
  const { productId, quantity = 1 } = req.body;

  try {
    const userId = req.session.user._id;
    let cart = await Cart.findOne({ user: userId });

    if (cart) {
      const productIndex = cart.products.findIndex(
        (item) => item.product.toString() === productId
      );

      if (productIndex > -1 && cart.products[productIndex].quantity > 1) {
        cart.products[productIndex].quantity -= quantity;
      }
    }

    await cart.save();

    const redirectUrl = req.get("Referer") || "/";
    res.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteItemFromCart = async (req, res) => {
  const { cartItemId } = req.params;

  try {
    let cart = await Cart.findOne({ user: req.session.user._id });

    if (cart) {
      cart.products = cart.products.filter((item) => item._id.toString() !== cartItemId);
    }

    await cart.save()

    res.redirect("/carts");
  } catch (error) {
    console.log(error);
  }
};

exports.clearCart = async (req, res) => {};
