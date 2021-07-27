const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const api = require("./routes/api");

const app = express();

app.use(
  cors({
    origin: [
      "https://home-radar.netlify.app",
      "http://localhost:3000",
      "http://localhost:5000",
    ],
  })
);

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", api);

module.exports = app;
