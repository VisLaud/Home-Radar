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

// profilesRouter.post("/", (req, res, next) => {
//   console.log(req.body);
//   res.status(201).json({
//     message: "Thing created successfully!",
//   });
// });

module.exports = profilesRouter;
