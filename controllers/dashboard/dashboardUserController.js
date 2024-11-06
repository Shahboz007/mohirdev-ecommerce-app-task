exports.getUsersPage = async (req, res) => {
    return res.render("dashboard/dashboardUser", { title: "Users" });
};
exports.getUpdateUserPage = async () => {};
exports.createUser = async () => {};
exports.updateUser = async () => {};
exports.deleteUser = async () => {};
