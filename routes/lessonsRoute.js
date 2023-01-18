const express = require("express");
const router = express.Router();

const lessonsController = require("../controllers/lessonsController");

router 
    .route("/")
    .get(lessonsController.getLessons)


module.exports = router;