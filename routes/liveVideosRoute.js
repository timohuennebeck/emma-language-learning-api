const express = require("express");
const router = express.Router();

const liveVideos = require("../controllers/liveVideosController");

router 
    .route("/")
    .get(liveVideos.getLiveVideos)


module.exports = router;