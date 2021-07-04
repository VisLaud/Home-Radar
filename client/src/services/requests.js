const axios = require("axios");
const API_URL = "http://localhost:8000";

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
