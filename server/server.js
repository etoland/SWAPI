import fetch from "cross-fetch";
import path from "path";
import express from "express";
import morgan from "morgan";
import {} from "dotenv/config";
import helmet from "helmet";

const PORT = 8000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.static("assets"));

app.get("/hello", (req, res) => {
  res.status(200).json({ hi: "hi" });
});

app.get("/people", async (req, res) => {
  const api_url = "https://swapi.dev/api/people";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  console.log(json);
  res.status(200).json({ json });
});

app.get("/planets", async (req, res) => {
  const api_url = "https://swapi.dev/api/planets";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.get("/starships", async (req, res) => {
  const api_url = "https://swapi.dev/api/starships";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.get("/people/:id/", async (req, res) => {
  const api_url = "https://swapi.dev/api/people";
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});
app.listen(PORT, function () {
  console.info("🌍 Listening on port " + PORT);
});
