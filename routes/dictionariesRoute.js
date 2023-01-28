const express = require("express");
const router = express.Router();

const dictionariesController = require("../controllers/dictionariesController");

router 
    .route("/")
    .get(dictionariesController.getDictionaries)


module.exports = router;