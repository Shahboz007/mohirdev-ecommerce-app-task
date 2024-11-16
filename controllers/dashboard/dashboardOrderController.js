const Order = require("../../models/Order");

exports.getDashboardOrderPage = async (req, res) => {
  try {
    const order = await Order.find().populate("user");

    res.render("dashboard/order/index", {
      title: "Orders | Dashboard",
      orderData: order,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDashboardOrderDetailsPage = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user').populate('products.product').exec();
    console.log(order);

    res.render("dashboard/order/details", {
      title: "Order Details | Dashboard",
      orderData: order,
    });
  } catch (error) {
    console.log(error);
  }
};
