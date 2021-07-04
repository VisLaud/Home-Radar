const {
  getAllRestaurants,
  getPlace,
} = require("../../models/googlePlaces/googlePlaces.model");

async function httpGetAllRestaurants(req, res) {
  return res.status(200).json(await getAllRestaurants());
}

async function httpGetPlace(req, res) {
  console.log(req.query);
  const { state, city } = req.query;
  console.log(state, city);
  return res.json(await getPlace(state, city));
}

module.exports = {
  httpGetAllRestaurants,
  httpGetPlace,
};
