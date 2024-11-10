const Product = require("../models/Product");

exports.getProductsPage = async (req, res) => {
    try {
        const products = await Product.find();

        res.render('products/index', {title: 'Products Page', productsData: products});
    } catch (error) {
        console.log(error);
    }
}

exports.getProductDetailsPage = async(req, res) => {
    try{
        const product = Product.findById(req.params.id);
        res.render('products/details', {title: 'Products Details', productData: product});
    }catch (error){
        console.log(error);
    }
}