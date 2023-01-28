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

module.exports = {
    getDictionariesWords,
};
