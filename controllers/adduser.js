//import User model class
const User = require("../models/user");

//exports controllers functions

exports.getHome = (req, res, next) => {
  res.render("home", { titlePage: "Home", linkPath: "/" });
};

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const lastname = req.body.lastname;
  const age = req.body.age;
  const city = req.body.city;
  User.create({
    name: name,
    lastname: lastname,
    age: age,
    city: city,
  })
    .then((result) => {
      console.log(result);
      res.redirect("/users");
    })
    .catch((err) => {
      console.log(err);
    });
};
