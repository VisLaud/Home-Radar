const {
  getAllUsers,
  registerNewUser,
  addALocation,
} = require("../../models/profiles/profiles.model");

async function httpGetAllUsers(req, res) {
  const { email } = req.query;
  if (!email) {
    return res.status(400).json({
      error: "Bad query parameter",
    });
  }
  return res.status(200).json(await getAllUsers(email));
}

async function httpAddLocation(req, res) {
  const { email, location, city } = req.body;
  if (!email || !location || !city) {
    return res.status(400).json({
      error: "Bad query parameter",
    });
  }
  await addALocation(email, location, city);
  return res.status(201).json({ email, location, city });
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
  httpAddLocation,
};
