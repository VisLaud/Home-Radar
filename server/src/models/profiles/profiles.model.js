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
  const user = await userProfileDatabase.find({ email });
  console.log(user);
  return user[0].bookmark;
}

async function addALocation(email, location, city) {
  let bookmark = [];
  await userProfileDatabase.findOne({ email }, function (err, result) {
    bookmark = result.bookmark;
  });
  bookmark = bookmark.filter((a) => {
    if (a.location !== location) {
      return a;
    }
  });
  await userProfileDatabase.updateOne(
    { email },
    { bookmark: [...bookmark, { location, city }] }
  );
  return { bookmark };
}

module.exports = {
  getAllUsers,
  registerNewUser,
  addALocation,
};
