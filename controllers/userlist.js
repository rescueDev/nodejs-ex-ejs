//import User model class
const User = require("../models/user");

//exports fetch all user function
exports.fetchUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.render("users", {
        usrs: users,
        titlePage: "All Users",
        linkPath: "/users",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getUser = (req, res, next) => {
  const usId = req.params.userId;
  User.findByPk(usId)
    .then((user) => {
      res.render("user-show", {
        user: user,
        titlePage: user.name,
        linkPath: "/users",
      });
    })
    .catch((err) => console.log(err));
};

exports.getEditUser = (req, res, next) => {
  const usId = req.params.userId;
  User.findByPk(usId).then((user) => {
    if (!user) {
      return res.redirect("/users");
    } else {
      res.render("edit-user", {
        user: user,
        linkPath: "/users/edit",
        titlePage: "Edit User",
      });
    }
  });
};

exports.saveEditUser = (req, res, next) => {
  const usId = req.body.userId;
  const updatedName = req.body.name;
  const updatedLastname = req.body.lastname;
  const updatedAge = req.body.age;
  const updatedCity = req.body.city;

  console.log("id post", usId);

  User.findByPk(usId)
    .then((us) => {
      console.log("this is user", us);
      us.name = updatedName;
      us.lastname = updatedLastname;
      us.age = updatedAge;
      us.city = updatedCity;
      return us.save();
    })
    .then((result) => {
      console.log("updated user");
      res.redirect("/users");
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const usId = req.body.userId;
  User.findByPk(usId)
    .then((user) => {
      user.destroy();
    })
    .then(() => {
      console.log("Destroyed Product");
      res.redirect("/users");
    })
    .catch((err) => console.log(err));
};
