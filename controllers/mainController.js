const Product = require("../models/Product");
exports.getHomePage = async(req, res) => {
    try{
        const products = await Product.find();
        res.render("index", { title: "Home page", isAuth: Boolean(req.session.user), productsData: products });
    }catch (error){
        console.log(error);
    }
}

exports.getDetailsPage = async(req, res) => {
    res.render("details", { title: "Product details", isAuth: Boolean(req.session.user) });
}