//import necessary
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");

//sequelize instance db
const sequelize = require("./util/database");

//models
const User = require("./models/user");
const Product = require("./models/product");

//use express
const app = express();

//static file
app.use(express.static(path.join(__dirname, "public")));

//set template engine
app.set("view engine", "ejs");
app.set("views", "views");

//body parser
app.use(bodyParser.urlencoded({ extended: false }));

//routes
app.use(homeRoutes.routes);
app.use(usersRoutes);
app.use(productsRoutes);

//relations
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

//call sequelize sync to create tables and relations
sequelize
  .sync({ force: true })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//listen port 3000
app.listen(3000);
