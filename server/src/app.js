const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const api = require("./routes/api");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/", api);

module.exports = app;
