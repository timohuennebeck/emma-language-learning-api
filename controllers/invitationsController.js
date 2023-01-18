const knex = require("knex")(require("../knexfile"));

const getInvitations = (_req, res) => {
    knex("invitations")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Invitations ${err}!`);
        });
};

module.exports = {
    getInvitations,
};
