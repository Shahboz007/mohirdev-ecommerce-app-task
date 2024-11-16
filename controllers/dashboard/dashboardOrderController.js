exports.getDashboardOrderPage = async(req, res) => {
  res.render('dashboard/order/index', {
    title: "Orders | Dashboard"
  });
}