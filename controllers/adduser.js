//import User model class
const User = require("../models/user");

//exports controllers functions

exports.getHome = (req, res, next) => {
  res.render("home", { titlePage: "Home", linkPath: "/" });
};

exports.postUser = (req, res, next) => {
  // users.push({ name: req.body.name });
  const user = new User(req.body.name);
  user.save();
  console.log("adduser.js", user);
  res.redirect("/users");
};
