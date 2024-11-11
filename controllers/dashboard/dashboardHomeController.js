// Desc      Get Dashboard home page
// Route     GET /dashboard
// Access    Protected
const User = require("../../models/User");
exports.getDashboardHomePage = async (req, res) => {
    res.render('dashboard/dashboardHome', {title: 'Dashboard'});
}

exports.getDashboardSettingsPage = async (req, res) => {
    try {
        const user = await  User.findById(req.session.user._id);
        res.render('dashboard/dashboardSettings', {title: 'Settings | Dashboard', userData: user});
    } catch (error) {
        console.log(error);
    }
}

exports.updateDashboardUser = async (req, res) => {
    const {name, email} = req.body;

    try {
        const user = await User.findById(req.session.user._id);

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();

        res.redirect('/dashboard/settings');
    } catch (error) {
        console.log(error);
    }
}

exports.updateDashboardUserPassword = async (req, res) => {
}