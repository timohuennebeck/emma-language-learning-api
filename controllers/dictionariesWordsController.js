const knex = require("knex")(require("../knexfile"));

const getDictionariesWords = (_req, res) => {
    knex("dictionaries_words")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Dictionaries Words ${err}!`);
        });
};

const addDictionariesWords = (req, res) => {
    knex("dictionaries_words")
        .insert(req.body)
        .then((resp) => {
            res.send(`Word ${resp} has been added.`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error adding Word: ${req.body.foreign_translation}! ${err}`,
            });
        });
};

const updateDictionariesWords = (req, res) => {
    knex("dictionaries_words")
        .where({ id: req.body.id })
        .update(req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error adding Flashcard: ${req.body.english}! ${err}`,
            });
        });
};

module.exports = {
    getDictionariesWords,
    addDictionariesWords,
    updateDictionariesWords,
};
