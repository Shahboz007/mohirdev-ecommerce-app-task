// Desc      Get Dashboard home page
// Route     GET /dashboard
// Access    Protected
exports.getDashboardHomePage = async (req, res) => {
    return res.render('dashboard/dashboardHome', {title: 'Dashboard'});
}