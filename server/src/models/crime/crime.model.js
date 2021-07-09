const axios = require("axios");

function getNationalData() {
  const national = {
    state_id: null,
    state_abbr: null,
    year: 2019,
    population: 328239523,
    violent_crime: 1245410,
    homicide: 16425,
    rape_legacy: null,
    rape_revised: 139815,
    robbery: 267988,
    aggravated_assault: 821182,
    property_crime: 6925677,
    burglary: 1117696,
    larceny: 5086096,
    motor_vehicle_theft: 721885,
    arson: 35554,
  };
  return national;
}

async function getCrimeData(stateAbbr) {
  const key = "z9yJctosNrMcXzGxymmxsUENqHKpuhQa3iGhGD6U";

  const response = await axios.get(
    `https://api.usa.gov/crime/fbi/sapi/api/estimates/states/${stateAbbr}/2019/2020?api_key=z9yJctosNrMcXzGxymmxsUENqHKpuhQa3iGhGD6U`
  );
  return response.data;
}

module.exports = { getCrimeData, getNationalData };
