const { getAllTypes } = require("../../models/googlePlaces/googlePlaces.model");

async function httpGetAllTypes(req, res) {
  const { lat, lng, radius, type } = req.query;
  if (!lat || !lng || !radius || !type) {
    return res.status(400).json({
      error: "Bad search query",
    });
  }
  return res.status(200).json(await getAllTypes(lat, lng, radius, type));
}

module.exports = {
  httpGetAllTypes,
};
