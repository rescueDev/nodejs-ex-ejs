const users = [];

exports.getHome = (req, res, next) => {
  res.render("home", { titlePage: "Home", linkPath: "/" });
};

exports.postUser = (req, res, next) => {
  users.push({ name: req.body.name });
  console.log("push", users);
  res.redirect("/users");
};

exports.users = users;
