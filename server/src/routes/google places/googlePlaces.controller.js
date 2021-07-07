const {
  getAllRestaurants,
  getPlace,
} = require("../../models/googlePlaces/googlePlaces.model");

async function httpGetAllRestaurants(req, res) {
  const { lat, lng, radius, type } = req.query;
  return res.status(200).json(await getAllRestaurants(lat, lng, radius, type));
}

async function httpGetPlace(req, res) {
  const { state, city } = req.query;
  return res.json(await getPlace(state, city));
}

module.exports = {
  httpGetAllRestaurants,
  httpGetPlace,
};
