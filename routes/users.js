const express = require("express");

const router = express.Router();

const usersData = require("./home");

router.get("/users", (req, res, next) => {
  const users = usersData.users;
  console.log("user page", users);
  res.render("users", { usrs: users, titlePage: "Users", linkPath: "/users" });
});

module.exports = router;
