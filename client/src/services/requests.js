const axios = require("axios");
const API_URL = "https://home-radar.herokuapp.com";

async function registerUser(profile) {
  try {
    console.log(profile);
    return await axios.post(`${API_URL}/profiles`, profile);
  } catch (err) {
    console.log(err);
    return {
      status: false,
    };
  }
}

export { registerUser };
