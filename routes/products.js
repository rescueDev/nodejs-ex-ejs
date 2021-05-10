const express = require("express");

const router = express.Router();

//controller product
const productController = require("../controllers/products");

router.get("/add-product", productController.getAddProduct);
router.post("/add-product", productController.addProduct);
// router.get("/cart", productController.getTheCart);
// router.post("/add-to-cart", productController.postCart);

router.get("/products", productController.fetchProducts);

router.get("/product/:productId", productController.showProduct);

module.exports = router;
