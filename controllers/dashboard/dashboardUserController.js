const User = require("../../models/User");

exports.getUsersPage = async (req, res) => {
  try {
    const users = await User.find();

    res.render("dashboard/user/dashboardUser", { title: "Users", data: users });
  } catch (err) {
    console.log(err);
  }
};
exports.getCreateUserPage = async (req, res) => {
  res.render("dashboard/user/dashboardUserCreate", {
    title: "Create new User",
  });
};
exports.createUser = async (req, res) => {
  const { name, email, password, adminStatus, isActive } = req.body;
  try {
    await User.create({
      name,
      email,
      password,
      adminStatus,
      isActive,
    });

    res.redirect('/dashboard/users')
  } catch (err) {
    console.log(err);
  }
};
exports.getUpdateUserPage = async (req, res) => {};
exports.updateUser = async (req, res) => {};
exports.deleteUser = async (req, res) => {
  try{
    await User.findByIdAndDelete(req.params.id);

    res.redirect('/dashboard/users')
  }catch(err){
    console.log(err)
  }
};
