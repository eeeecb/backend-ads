const express = require("express");

const app = express();

//app.use(express.json());

app.use(function (req, res, next) {
  console.log("Data: ", new Date());
  console.log(req.url);
  console.log(req.method);
  console.log(req.headers);
  console.log(req.params);
  console.log(req.body);
  next();
});

app.get("/", function (req, res) {
  res.send("GET recebido com sucesso");
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.status(201).send("POST criado com sucesso");
});

app.put("/", function (req, res) {
  res.json({ status: 200, message: "PUT recebido com sucesso" });
});

app.delete("/", function (req, res) {
  throw new Exception();
});

app.use(function (error, req, res, next) {
  res.status(400).send("Bad Request");
});

app.listen(3000, function () {
  console.log("API Online");
});

module.exports = app;