exports.getProductPage = async (req, res) => {
    return res.render("dashboard/dashboardProduct", { title: "Products" });
};
exports.getCreateProductPage = async (req, res) => {};
exports.createProduct = async (req, res) => {};
exports.getUpdateProductPage = async (req, res) => {};
exports.updateProduct = async (req, res) => {};
exports.deleteProduct = async (req, res) => {};
