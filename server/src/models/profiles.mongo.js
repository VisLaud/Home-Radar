const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    displayName: {
        type: String, required: true
    }
});

/*const postSchema = mongoose.Schema({
  employeeid: { type: Number, default: 0 },
  covidstat: { type: Boolean, default: false },
  checkstat: { type: Boolean, default: false },
  empType: { type: String, default: "E" },
  meetings: [
    {
      startTime: String,
      endTime: String,
      floor: { type: Number, default: 0 },
      section: { type: Number, default: 0 },
      note: String,
    },
  ],
});
*/
