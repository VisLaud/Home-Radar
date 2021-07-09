const express = require("express");

const profilesRouter = require("./profiles/profiles.router");
const googlePlacesRouter = require("./google places/googlePlaces.router");
const yelpRouter = require("./yelp/yelp.router");
const crimeDataRouter = require("./crime/crime.router");

const api = express.Router();

api.use("/profiles", profilesRouter);
api.use("/googleplaces", googlePlacesRouter);
api.use("/yelp/", yelpRouter);
api.use("/crime", crimeDataRouter);

module.exports = api;
