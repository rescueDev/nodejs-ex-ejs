const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false,
  },
  name: Sequelize.STRING,
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  category: Sequelize.STRING,
});

module.exports = Product;
