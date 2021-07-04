const {
  getAllUsers,
  registerNewUser,
} = require("../../models/profiles/profiles.model");

async function httpGetAllUsers(req, res) {
  return res.status(200).json(await getAllUsers());
}

async function httpRegisterUser(req, res) {
  const profile = req.body;
  if (!profile.email) {
    return res.status(400).json({
      error: "Missing required user properties",
    });
  }
  await registerNewUser(profile);
  return res.status(201).json(profile);
}

module.exports = {
  httpGetAllUsers,
  httpRegisterUser,
};
