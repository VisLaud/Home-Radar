const express = require("express");

const profilesRouter = require("./profiles/profiles.router");

const api = express.Router();

api.use("/profiles", profilesRouter);

module.exports = api;
