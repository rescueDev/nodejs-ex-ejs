//import User model class
const User = require("../models/user");

//exports fetch all user function
exports.fetchUsers = (req, res, next) => {
  const users = User.fetchAll();
  console.log("user page", users);
  res.render("users", { usrs: users, titlePage: "Users", linkPath: "/users" });
};
