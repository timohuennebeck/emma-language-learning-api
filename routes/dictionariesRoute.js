const express = require("express");
const router = express.Router();

const dictionariesController = require("../controllers/dictionariesController");

router
    .route("/")
    .get(dictionariesController.getDictionaries)

router
    .route("/:id")
    .get(dictionariesController.getDictionariesId);

module.exports = router;
