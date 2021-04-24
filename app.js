//import necessary
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");

//use express
const app = express();

//static file
app.use(express.static(path.join(__dirname, "public")));

//set template engine
app.set("view engine", "ejs");
app.set("views", "views");

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//two routes
app.use(homeRoutes.routes);
app.use(usersRoutes);

//listen port 3000
app.listen(3000);
