const express = require("express");
const routerProdutos = require("./router");
const app = express();

app.use(express.json());
app.use(routerProdutos);

app.listen(3000, function () {
  console.log("API está funcionando!");
});

module.exports = app;