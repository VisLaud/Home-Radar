const express = require("express");

const crimeDataRouter = express.Router();

const { httpGetCrimeData, httpGetNationalData } = require("./crime.controller");

crimeDataRouter.get("/", httpGetCrimeData);
crimeDataRouter.get("/national", httpGetNationalData);

module.exports = crimeDataRouter;
