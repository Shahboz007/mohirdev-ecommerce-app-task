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
    const order = await Order.findById(req.params.id)
      .populate("user")
      .populate("products.product")
      .exec();

    res.render("dashboard/order/details", {
      title: "Order Details | Dashboard",
      orderData: order,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.changeDashboardOrderStatus = async (req, res) => {
  const { status } = req.body;
  console.log("🚀 ~ exports.changeDashboardOrderStatus= ~ status:", status)

  const redirectUrl = req.get("Referer") || "/";

  if (status !== "Delivered" && status !== "Canceled" && status !== "Pending") {
    return res.redirect(redirectUrl);
  }

  try {
    await Order.findByIdAndUpdate(req.params.id, { status });

    res.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
  }
};
