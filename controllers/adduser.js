//import User model class
const User = require("../models/user");

//exports controllers functions

exports.getHome = (req, res, next) => {
  res.render("home", { titlePage: "Home", linkPath: "/" });
};

exports.postUser = (req, res, next) => {
  const usr = new User(req.body.name);
  usr.save();
  console.log("adduser.js", usr);
  res.redirect("/users");
};
