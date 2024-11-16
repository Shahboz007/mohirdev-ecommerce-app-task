const Order = require("../../models/Order");

exports.getDashboardOrderPage = async (req, res) => {
  try {
    const order = await Order.find().populate('user');

    res.render("dashboard/order/index", {
      title: "Orders | Dashboard",
      orderData: order,
    });
  } catch (error) {
    console.log(error);
  }
};
