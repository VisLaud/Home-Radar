const axios = require("axios");

const URL = "https://swapi.dev/api/people/1";

const user = {
  name: "Simanta Thapa",
  email: "ximantathapa@gmail.com",
  favorites: [
    {
      address: "SJSU",
      long: "1232",
      lat: "5345",
    },
    {
      address: "Fort mill",
      long: "75665",
      lat: "3456",
    },
  ],
};
async function getAllUsers() {
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

module.exports = {
  getAllUsers,
};
