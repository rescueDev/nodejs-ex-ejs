//import Product model
const Cart = require("../models/cart");
const Product = require("../models/product");
const User = require("../models/user");

exports.getAddProduct = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.render("add-product", {
        titlePage: "Add Product",
        linkPath: "/add-product",
        users: users,
      });
    })
    .catch((err) => console.log(err));
};

exports.addProduct = (req, res, next) => {
  const name = req.body.name;
  const price = req.body.price;
  const category = req.body.category;
  const userId = req.body.userId;

  Product.create({
    name: name,
    price: price,
    category: category,
    userId: userId,
  })
    .then(() => {
      console.log("Product Added");
      res.redirect("/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.fetchProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("products", {
        products: products,
        linkPath: "/products",
        titlePage: "Products",
      });
    })
    .catch((err) => console.log(err));
};

exports.showProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findByPk(productId)
    .then((product) => {
      return product;
    })
    .then((product) => {
      //GET ASSOCIATED USER
      product.getUser().then((user) => {
        // console.log("user associated: ", user);
        res.render("product-show", {
          product: product,
          user: user,
          titlePage: product.name,
          linkPath: "/product/" + product.id,
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
