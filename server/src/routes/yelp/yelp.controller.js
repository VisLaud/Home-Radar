const { getYelp } = require("../../models/yelp/yelp.model");

async function httpGetYelp(req, res) {
  const { term, location, radius } = req.query;
  if (!term || !location || !radius) {
    return res.status(400).json({
      error: "Missing required user properties",
    });
  }
  return res.json(await getYelp(term, location, radius));
}

module.exports = {
  httpGetYelp,
};
