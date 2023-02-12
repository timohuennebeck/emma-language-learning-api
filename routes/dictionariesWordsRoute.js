const express = require("express");
const router = express.Router();

const dictionariesWordsController = require("../controllers/dictionariesWordsController");

router
    .route("/")
    .get(dictionariesWordsController.getDictionariesWords)
    .put(dictionariesWordsController.updateDictionariesWords)
    .post(dictionariesWordsController.addDictionariesWords);

module.exports = router;
