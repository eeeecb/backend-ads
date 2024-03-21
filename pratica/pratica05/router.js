const express = require("express");

const router = express.Router();

const produtos = [];

router.get("/produtos", function (req, res) {
  res.json(produtos);
});

router.get("/produtos/:produtoId", function (req, res) {
  const encontrado = produtos.find((item) => item.id == req.params.produtoId);
  if (encontrado) {
    res.json(encontrado);
  } else {
    res.status(404).json({ msg: "Produto nao encontrado" });
  }
});

router.post("/produtos", function (req, res) {
  if (req.body && req.body.nome && req.body.preco) {
    const novo = {
      id: produtos.length + 1,
      nome: req.body.nome,
      preco: req.body.preco,
    };
    produtos.push(novo);
    res.status(201).json(novo);
  } else {
    res.status(422).json({ msg: "Nome e preco do produto não informados" });
  }
});

router.put("/produtos/:produtoId", function (req, res) {
  const encontrado = produtos.find((item) => item.id == req.params.produtoId);
  if (encontrado) {
    if (req.body && req.body.nome && req.body.preco) {
      encontrado.nome = req.body.nome;
      encontrado.preco = req.body.preco;
      res.json(encontrado);
    } else {
      res.status(422).json({ msg: "Nome e preco do produto não informados" });
    }
  } else {
    res.status(404).json({ msg: "Produto nao encontrado" });
  }
});

router.delete("/produtos/:produtoId", function (req, res) {
  const encontrado = produtos.find((item) => item.id == req.params.produtoId);
  if (encontrado) {
    produtos.splice(produtos.indexOf(encontrado), 1);
    res.status(204).end();
  } else {
    res.status(404).json({ msg: "Produto nao encontrado" });
  }
});

module.exports = router;
