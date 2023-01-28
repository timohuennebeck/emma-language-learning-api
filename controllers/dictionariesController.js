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

module.exports = {
    getDictionaries,
};
