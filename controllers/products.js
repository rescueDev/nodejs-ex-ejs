//import Product model
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
    .then((res) => {
      console.log(res);
      console.log("Product Added");
    })
    .catch((err) => {
      console.log(err);
    });
  //   res.redirect("/products");
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
