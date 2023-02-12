const express = require("express");
const router = express.Router();

const dictionariesController = require("../controllers/dictionariesController");

router
    .route("/")
    .get(dictionariesController.getDictionaries)
    .post(dictionariesController.addDictionaries);

router
    .route("/:id")
    .get(dictionariesController.getDictionariesId)
    .put(dictionariesController.updateDictionaries);

module.exports = router;
