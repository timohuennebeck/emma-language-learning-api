const express = require("express");
const router = express.Router();

const invitationsController = require("../controllers/invitationsController");

router 
    .route("/")
    .get(invitationsController.getInvitations)


module.exports = router;