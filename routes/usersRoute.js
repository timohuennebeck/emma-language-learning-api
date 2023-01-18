const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router 
    .route("/")
    .get(usersController.getUsers)

router 
    .route("/:id")
    .get(usersController.getUsersId)

module.exports = router;