const axios = require("axios");

async function getAllRestaurants() {
  const key = "AIzaSyAQBePHvtMlPw97zNwTjHuIiSje19lD3wU";
  const neighborhood = "chelsea";
  const borough = "manhattan";
  const city = "new+york+city";
  const category = "burgers";
  const names = [];
  await axios
    .get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${neighborhood}+${borough}+${city}&type=restaurant&key=${key}`
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
