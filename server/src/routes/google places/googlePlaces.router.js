const express = require("express");

const googlePlacesRouter = express.Router();

const { httpGetAllTypes } = require("./googlePlaces.controller");

googlePlacesRouter.get("/", httpGetAllTypes);
//googlePlacesRouter.get("/restaurants", httpGetPlace);

module.exports = googlePlacesRouter;
