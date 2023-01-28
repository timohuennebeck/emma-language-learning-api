const knex = require("knex")(require("../knexfile"));

const getReadings = (_req, res) => {
    knex("readings")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Readings ${err}!`);
        });
};

module.exports = {
    getReadings,
};
