const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs-db", "root", "liesina92", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
