const knex = require("knex")(require("../knexfile"));

const getLiveVideos = (_req, res) => {
    knex("live_video")
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.status(400).res.send(`Error retrieving Live Videos ${err}!`);
        });
};

module.exports = {
    getLiveVideos,
};
