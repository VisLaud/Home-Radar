const { getYelp } = require("../../models/yelp/yelp.model");

async function httpGetYelp(req, res) {
  const { term, location } = req.query;
  if (!term || !location) {
    return res.status(400).json({
      error: "Missing required user properties",
    });
  }
  return res.json(await getYelp(term, location));
}

module.exports = {
  httpGetYelp,
};
