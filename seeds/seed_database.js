const usersData = require("../seeds_data/users");
const studentsData = require("../seeds_data/students");
const teachersData = require("../seeds_data/teachers");
const invitationsData = require("../seeds_data/invitations");
const lessonsData = require("../seeds_data/lessons");
const reviewsData = require("../seeds_data/reviews");
const liveVideosData = require("../seeds_data/liveVideos");

exports.seed = function (knex) {
    return knex("users")
        .del()
        .then(function () {
            return knex("users").insert(usersData);
        })
        .then(() => {
            return knex("students").del();
        })
        .then(() => {
            return knex("students").insert(studentsData);
        })
        .then(() => {
            return knex("teachers").del();
        })
        .then(() => {
            return knex("teachers").insert(teachersData);
        })
        .then(() => {
            return knex("invitations").del();
        })
        .then(() => {
            return knex("invitations").insert(invitationsData);
        })
        .then(() => {
            return knex("lessons").del();
        })
        .then(() => {
            return knex("lessons").insert(lessonsData);
        })
        .then(() => {
            return knex("reviews").del();
        })
        .then(() => {
            return knex("reviews").insert(reviewsData);
        })
        .then(() => {
            return knex("live_videos").del();
        })
        .then(() => {
            return knex("live_videos").insert(liveVideosData);
        });
};
