const express = require("express");
const router = express.Router();

const dictionariesWordsController = require("../controllers/dictionariesWordsController");

router 
    .route("/")
    .get(dictionariesWordsController.getDictionariesWords)


module.exports = router;