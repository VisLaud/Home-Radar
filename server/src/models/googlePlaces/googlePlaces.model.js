const axios = require("axios");

async function getAllRestaurants(lat, lng, radius, type) {
  const key = "AIzaSyAQBePHvtMlPw97zNwTjHuIiSje19lD3wU";
  const names = [];
  await axios
    .get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${key}`
    )
    .then((response) =>
      response.data.results.map((business) => names.push(business))
    );
  return names;
}

async function getPlace(state, city) {
  if (!state || !city) {
    return {
      error: 404,
      message: "bad search query",
    };
  } else return { state, city };
}

module.exports = {
  getAllRestaurants,
  getPlace,
};
