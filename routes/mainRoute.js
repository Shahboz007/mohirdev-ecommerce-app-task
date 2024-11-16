const router = require("express").Router();
const {
  getHomePage,
  getDetailsPage,
  getProductsPage,
} = require("../controllers/mainController");

router.get("/", getHomePage);
module.exports = router;
