const express = require("express");

const router = express.Router();

// const usersData = require("./home");

const usersList = require("../controllers/userlist");

router.get("/users", usersList.fetchUsers);

module.exports = router;