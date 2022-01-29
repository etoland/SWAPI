const path = require("path");
const express = require("express");
const morgan = require("morgan");

require("dotenv").config();

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("assets"));

app.get("/hello", (req, res) => {
  res.status(200).json({ hi: "hi" });
});

app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
