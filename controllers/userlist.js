//import User model class
const User = require("../models/user");

//exports fetch all user function
exports.fetchUsers = (req, res, next) => {
  User.fetchAll((users) => {
    res.render("users", {
      usrs: users,
      titlePage: "All Users",
      linkPath: "/users",
    });
  });
};
