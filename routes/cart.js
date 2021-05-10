const express = require("express");

const router = express.Router();

//controller product
const cartController = require("../controllers/cart");

router.get("/cart", cartController.showCart);
router.post("/add-to-cart", cartController.postCart);
// router.post("/add-to-cart", cartController.addProduct);
// router.get("/cart", productController.getTheCart);

module.exports = router;
