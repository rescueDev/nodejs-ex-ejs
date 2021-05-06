const Sequelize = require("sequelize");
const dotenv = require("dotenv").config("");

const sequelize = new Sequelize(
  "nodejs-db",
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
  }
);

module.exports = sequelize;
