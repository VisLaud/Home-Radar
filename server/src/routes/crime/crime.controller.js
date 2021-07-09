const {
  getNationalData,
  getCrimeData,
} = require("../../models/crime/crime.model");

async function httpGetCrimeData(req, res) {
  const { state } = req.query;
  if (!state) {
    return res.status(400).json({
      error: "Bad search query",
    });
  }
  return res.status(200).json(await getCrimeData(state));
}

function httpGetNationalData(req, res) {
  return res.status(200).json(getNationalData());
}

module.exports = {
  httpGetCrimeData,
  httpGetNationalData,
};
