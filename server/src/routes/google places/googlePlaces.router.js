const express = require("express");

const googlePlacesRouter = express.Router();

const {
  httpGetAllRestaurants,
  httpGetPlace,
} = require("./googlePlaces.controller");

googlePlacesRouter.get("/", httpGetAllRestaurants);
googlePlacesRouter.get("/restaurants", httpGetPlace);

module.exports = googlePlacesRouter;
