const express = require("express");

const router = express.Router();

// const usersData = require("./home");

const usersList = require("../controllers/userlist");

router.get("/users", usersList.fetchUsers);

router.get("/users/:userId", usersList.getUser);
router.post("/users/edit", usersList.saveEditUser);

router.post("/users/delete", usersList.deleteUser);

router.get("/users/edit/:userId", usersList.getEditUser);

module.exports = router;
