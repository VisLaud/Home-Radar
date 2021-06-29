const express = require("express");

const profilesRouter = express.Router();

const { httpGetAllUsers } = require("./profiles.controller");

profilesRouter.get("/", httpGetAllUsers);

module.exports = profilesRouter;
