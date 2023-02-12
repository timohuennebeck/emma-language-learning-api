const knex = require("knex")(require("../knexfile"));

const getDictionaries = (_req, res) => {
    knex("dictionaries")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Dictionaries ${err}!`);
        });
};

const getDictionariesId = (req, res) => {
    knex("dictionaries")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Dictionaries ${err}!`);
        });
};

const updateDictionaries = (req, res) => {
    knex("dictionaries")
        .where({ id: req.params.id })
        .update(req.body)
        .then(() => {
            res.sendStatus(200);
        })
        .catch((err) => {
            res.status(400).res.send(`Error updating Dictionaries ${err}!`);
        });
};

const addDictionaries = (req, res) => {
    knex("dictionaries")
        .insert(req.body)
        .then((resp) => {
            res.send(`Flashcard Deck ${resp} has been added.`);
        })
        .catch((err) => {
            res.status(400).json({
                message: `Error adding Flashcard Deck: ${req.body.name}! ${err}`,
            });
        });
};

module.exports = {
    getDictionaries,
    getDictionariesId,
    updateDictionaries,
    addDictionaries,
};
