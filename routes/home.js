const express = require("express");

const router = express.Router();

const homeController = require("../controllers/adduser");

const users = [];

router.get("/", homeController.getHome);

router.post("/", homeController.postUser);

exports.routes = router;
exports.users = users;
