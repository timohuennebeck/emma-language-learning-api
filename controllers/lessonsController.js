const knex = require("knex")(require("../knexfile"));

const getLessons = (_req, res) => {
    knex("lessons")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Lessons ${err}!`);
        });
};

module.exports = {
    getLessons,
};
