const express = require("express");
const router = express.Router();

const readingsController = require("../controllers/readingsController");

router 
    .route("/")
    .get(readingsController.getReadings)


module.exports = router;