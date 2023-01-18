const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/studentsController");

router 
    .route("/")
    .get(studentsController.getStudents)

router 
    .route("/:id")
    .get(studentsController.getStudentsId)

module.exports = router;