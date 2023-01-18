const knex = require("knex")(require("../knexfile"));

const getStudents = (_req, res) => {
    knex("students")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Students ${err}!`);
        });
};

const getStudentsId = (req, res) => {
    knex("students")
        .where({ id: req.params.id })
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving ${req.params.id}, ${err}!`);
        });
};

module.exports = {
    getStudents,
    getStudentsId,
};
