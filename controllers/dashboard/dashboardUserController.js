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
      adminStatus: adminStatus === 'true',
      isActive: isActive === 'true',
    });

    res.redirect("/dashboard/users");
  } catch (err) {
    console.log(err);
  }
};
exports.getUpdateUserPage = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render("dashboard/user/dashboardUserUpdate", {
      title: "Update User",
      initialValues: user,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateUser = async (req, res) => {
  const { name, email, password, adminStatus, isActive } = req.body;

  try{
    const user = await User.findById(req.params.id);

    if(name) user.name = name;
    if(email) user.email = email;
    if(password) user.password = password;
    user.adminStatus = adminStatus === 'true';
    user.isActive = isActive === 'true';

    user.save();

    res.redirect('/dashboard/users')
  }catch(err){
    console.log(err)
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.redirect("/dashboard/users");
  } catch (err) {
    console.log(err);
  }
};
