const express = require("express");

const profilesRouter = express.Router();

const {
  httpGetAllUsers,
  httpRegisterUser,
  httpAddLocation,
} = require("./profiles.controller");

profilesRouter.get("/", httpGetAllUsers);
profilesRouter.post("/", httpRegisterUser);
profilesRouter.post("/favorites", httpAddLocation);
module.exports = profilesRouter;
