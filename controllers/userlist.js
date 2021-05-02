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
