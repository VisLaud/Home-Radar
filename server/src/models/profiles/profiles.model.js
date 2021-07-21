const axios = require("axios");
const userProfileDatabase = require("./profiles.mongo");

const URL = "";

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
async function getAllUsers(email) {
  return await userProfileDatabase.find({ email });
}

async function addALocation(email, location) {
  let bookmark = [];
  await userProfileDatabase.findOne({ email }, function (err, result) {
    bookmark = result.bookmark;
  });
  bookmark = bookmark.filter((a) => {
    if (a !== location) {
      return a;
    }
  });
  await userProfileDatabase.updateOne(
    { email },
    { bookmark: [...bookmark, location] }
  );
  return { bookmark };
}

module.exports = {
  getAllUsers,
  registerNewUser,
  addALocation,
};
