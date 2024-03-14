const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Você fez uma requisição GET");
});

app.post("/", (req, res) => {
  res.status(201).send("Você fez uma requisição POST");
});

app.put("/", (req, res) => {
  res.status(200).send("Você fez uma requisição PUT");
});

app.delete("/", (req, res) => {
    res.status(204).send();
});

module.exports = app;