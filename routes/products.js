const express = require("express");

const router = express.Router();

//controller product
const productController = require("../controllers/products");

router.get("/add-product", productController.getAddProduct);
router.post("/add-product", productController.addProduct);

router.get("/products", productController.fetchProducts);

module.exports = router;
