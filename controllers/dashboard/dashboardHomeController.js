// Desc      Get Dashboard home page
// Route     GET /dashboard
// Access    Protected
const Order = require("../../models/Order");
const User = require("../../models/User");
exports.getDashboardHomePage = async (req, res) => {
  try {
    // Users
    const usersCount = await User.countDocuments();
    // Orders
    const ordersCount = await Order.countDocuments({ status: "Pending" });
    // Income
    const income = await Order.aggregate([
      {
        $match: { status: "Delivered" },
      },
      {
        $group: {
          _id: null,
          totalIncome: { $sum: "$totalPrice" },
        },
      },
    ]);
    const totalIncome = income.length > 0 ? income[0].totalIncome : 0;
    // Products Sold
    const sold = await Order.aggregate([
      {
        $match: { status: "Delivered" },
      },
      {
        $group: {
          _id: null,
          totalIncome: { $sum: "$totalPrice" },
        },
      },
    ]);

    const totalSold = sold.length > 0 ? sold[0].totalIncome : 0;

    res.render("dashboard/dashboardHome", {
      title: "Dashboard",
      totalData: {
        usersCount,
        ordersCount,
        totalIncome,
        totalSold,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getDashboardSettingsPage = async (req, res) => {
  try {
    const user = await User.findById(req.session.user._id);
    res.render("dashboard/dashboardSettings", {
      title: "Settings | Dashboard",
      userData: user,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateDashboardUser = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.findById(req.session.user._id);

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.redirect("/dashboard/settings");
  } catch (error) {
    console.log(error);
  }
};

exports.updateDashboardUserPassword = async (req, res) => {};
