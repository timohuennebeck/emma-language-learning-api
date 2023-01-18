const knex = require("knex")(require("../knexfile"));

const getTeachers = (_req, res) => {
    knex("teachers")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Teachers ${err}!`);
        });
};

const getTeachersId = (req, res) => {
    knex("teachers")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving ${req.params.id}, ${err}!`);
        });
};

module.exports = {
    getTeachers,
    getTeachersId,
};
