const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, "Quantity must be at least 1"],
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

cartSchema.methods.calculateTotalPrice = async function () {
  await this.populate("products.product");

  this.totalPrice = this.products.reduce((total, item) => {
    const price = item.product.price;
    return total + price * item.quantity;
  }, 0);

  return this.totalPrice;
};

cartSchema.pre("save", async function () {
  await this.calculateTotalPrice();
  next();
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
