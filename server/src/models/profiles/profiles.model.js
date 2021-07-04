const axios = require("axios");
const userProfileDatabase = require("./profiles.mongo");

const URL = "";

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
  return user;
}

async function registerNewUser(profile) {
  await userProfileDatabase.findOneAndUpdate(
    {
      email: profile.email,
    },
    profile,
    {
      upsert: true,
    }
  );
}

module.exports = {
  getAllUsers,
  registerNewUser,
};
