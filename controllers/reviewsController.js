const knex = require("knex")(require("../knexfile"));

const getReviews = (_req, res) => {
    knex("reviews")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Reviews ${err}!`);
        });
};

module.exports = {
    getReviews,
};
