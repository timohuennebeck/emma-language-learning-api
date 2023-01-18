const knex = require("knex")(require("../knexfile"));

// routes "/"

const getUsers = (_req, res) => {
    knex("users")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Users: ${err}!`);
        });
};

const getUsersId = (req, res) => {
    knex("users")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).send(`Error retrieving Users: ${err}!`);
        });
};

module.exports = {
    getUsers,
    getUsersId,
};
