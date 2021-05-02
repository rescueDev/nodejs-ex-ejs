const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  lastname: Sequelize.STRING,
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  city: Sequelize.STRING,
});

module.exports = User;
