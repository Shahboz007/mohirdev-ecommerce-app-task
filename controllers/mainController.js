exports.getHomePage = async(req, res) => {
    res.render("index", { title: "Home page", isAuth: Boolean(req.session.user) });
}

exports.getDetailsPage = async(req, res) => {
    res.render("details", { title: "Product details", isAuth: Boolean(req.session.user) });
}