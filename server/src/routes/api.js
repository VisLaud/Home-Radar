const express = require("express");

const profilesRouter = require("./profiles/profiles.router");
const googlePlacesRouter = require("./google places/googlePlaces.router");

const api = express.Router();

api.use("/profiles", profilesRouter);
api.use("/googleplaces", googlePlacesRouter);

module.exports = api;
