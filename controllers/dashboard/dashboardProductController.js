const Product = require("../../models/Product");

exports.getProductPage = async (req, res) => {
    res.render("dashboard/dashboardProduct", { title: "Products" });
};
exports.getCreateProductPage = async (req, res) => {
    res.render("dashboard/dashboardProductCreate", {
        title: "Create New Product",
    });
};
exports.createProduct = async (req, res) => {
    const { name, description, stock, price, image } = req.body;

    try {
        await Product.create({
            name,
            description,
            stock,
            price,
            image,
        });

        res.redirect("/dashboard/products");
    } catch (err) {
        console.log(err);
    }
};
exports.getUpdateProductPage = async (req, res) => {};
exports.updateProduct = async (req, res) => {};
exports.deleteProduct = async (req, res) => {};
