const express = require("express");
const router = express.Router();

const teachersController = require("../controllers/teachersController");

router 
    .route("/")
    .get(teachersController.getTeachers)

router 
    .route("/:id")
    .get(teachersController.getTeachersId)

module.exports = router;