const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
  res.render("home", { titlePage: "Home", linkPath: "/" });
});

router.post("/", (req, res, next) => {
  users.push({ name: req.body.name });
  console.log("push", users);
  res.redirect("/users");
});

exports.routes = router;
exports.users = users;
