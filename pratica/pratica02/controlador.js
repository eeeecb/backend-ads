const Contato = require("./modelo");

const contatos = [];

function adicionarContato(nome, email, telefone) {
  const novoContato = { Contato };
  contatos.push(novoContato);
}

function listarContatos() {
  return contatos;
}

function buscarContato(nome) {
  const buscar = contatos.find((contato) => contatos.nome === nome);
}

function atualizarContato(nome, email, telefone) {
  const buscarContato = contatos.find((contato) => contatos.nome === nome);
  if (buscarContato) {
    buscarContato.email = outroEmail;
    buscarContato.telefone = outroTelefone;
  } else {
    console.log("Produto não localizado");
  }
}

function removerContato(nome) {
  const posicao = contatos.findIndex((contatos) => produto.nome == nome);
  if (posicao >= 0) {
    contatos.splice(posicao, 1);
  } else {
    console.log("Produto não localizado.");
  }
}

module.exports = {
  adicionarContato,
  listarContatos,
  buscarContato,
  atualizarContato,
  removerContato,
};
