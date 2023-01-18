const knex = require("knex")(require("../knexfile"));

const getReviews = (_req, res) => {
    knex("students")
        .innerJoin("reviews", "students.id", "reviews.students_id")
        .innerJoin("users", "students.users_id", "users.id")
        .select("*")
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
