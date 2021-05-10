//import necessary
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");
const productsRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");

//sequelize instance db
const sequelize = require("./util/database");

//models
const User = require("./models/user");
const Product = require("./models/product");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

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
app.use((req, res, next) => {
  User.findByPk(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});
app.use(homeRoutes.routes);
app.use(usersRoutes);
app.use(productsRoutes);
app.use(cartRoutes);

//relations
Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);

User.hasOne(Cart);
Cart.belongsTo(User);

Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

//call sequelize sync to create tables and relations
sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    return User.findByPk(1);
  })
  .then((user) => {
    if (!user) {
      User.create({
        name: "Salvo",
        lastname: "Borgia",
        age: 28,
        city: "Bergamo",
      });
    }
    return user;
  })
  .then((user) => {
    //create cart for user
    return user.createCart();
  })
  .then((cart) => {
    //listen port 3000
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
