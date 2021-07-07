const { getYelp } = require("../../models/yelp/yelp.model");

async function httpGetYelp(req, res) {
  const { term, cityName } = req.query;
  if (!term || cityName) {
    return res.status(400).json({
      error: "Missing required user properties",
    });
  }
  return res.json(await getYelp(term, cityName));
}

module.exports = {
  httpGetYelp,
};
