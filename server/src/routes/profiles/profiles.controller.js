const { getAllUsers } = require("../../models/profiles.model");

async function httpGetAllUsers(req, res) {
  return res.status(200).json(await getAllUsers());
}

module.exports = {
  httpGetAllUsers,
};
