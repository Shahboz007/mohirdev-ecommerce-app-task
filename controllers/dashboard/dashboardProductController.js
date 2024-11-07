const Product = require("../../models/Product");

exports.getProductPage = async (req, res) => {
  try {
    const products = await Product.find();
    res.render("dashboard/product/dashboardProduct", {
      title: "Products",
      data: products,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.getCreateProductPage = async (req, res) => {
  res.render("dashboard/product/dashboardProductCreate", {
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
exports.getUpdateProductPage = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.render("dashboard/product/dashboardProductUpdate", {
      title: "Product Update",
      initialValues: product,
    });
  } catch (err) {
    console.log(err);
  }
};
exports.updateProduct = async (req, res) => {
  const {} = req.body;

  try {
    await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});

    res.redirect("/dashboard/products");
  } catch (err) {
    console.log(err);
  }
};
exports.deleteProduct = async (req, res) => {};
