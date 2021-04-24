const usersData = require("./adduser");

exports.fetchUsers = (req, res, next) => {
  const users = usersData.users;
  console.log("user page", users);
  res.render("users", { usrs: users, titlePage: "Users", linkPath: "/users" });
};
