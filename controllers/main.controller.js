exports.getHomePage = async(req, res) => {
    res.render("index", { title: "Home page" });
}

exports.getDetailsPage = async(req, res) => {
    res.render("details", { title: "Product details" });
}