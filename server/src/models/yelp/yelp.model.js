const axios = require("axios");

const key =
  "P4VvuSxrfd8MEUzfgQIc4C09lNMNipI5i4eqnKgvP_G6a9KQahj_dydvHWJEF_P3wds4vEPNnRa0DbYxyhzshJa6ndTeNU6_sKAj9pLj7tqoctBBioVxUh6KFpDbYHYx";

async function getYelp(term, cityName) {
  const response = await axios.get(
    `https://api.yelp.com/v3/businesses/search?term=${term}&location=${cityName}`,
    {
      headers: {
        Authorization: `Bearer ${key}`,
      },
    }
  );
  for (const restaurant of response.data.businesses) {
    const reviewResp = await axios.get(
      `https://api.yelp.com/v3/businesses/${restaurant.id}/reviews`,
      {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      }
    );
    restaurant.reviews = reviewResp.data.reviews;
  }

  return response.data.businesses;
}

module.exports = {
  getYelp,
};
