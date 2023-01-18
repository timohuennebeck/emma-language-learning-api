const express = require("express");
const router = express.Router();

const reviewsController = require("../controllers/reviewsController");

router 
    .route("/")
    .get(reviewsController.getReviews)


module.exports = router;