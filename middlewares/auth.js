exports.protected = async (req, res, next) => {
  if (!req.session.isLogged) {
    res.redirect("/auth/login");
  }
  next();
};
