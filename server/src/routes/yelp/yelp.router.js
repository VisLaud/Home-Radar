const express = require("express");

const yelpRouter = express.Router();

const { httpGetYelp } = require("./yelp.controller");

yelpRouter.get("/", httpGetYelp);

module.exports = yelpRouter;
