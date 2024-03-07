const readline = require("readline-sync");
const contatoControlador = require("./controlador");

function menu() {
  console.log("1. Adicionar contato");
  console.log("2. Listar contatos");
  console.log("3. Buscar contato");
  console.log("4. Atualizar contato");
  console.log("5. Remover contato");
  console.log("6. Sair");
}

function escolherOpcao(opcao) {
  switch (opcao) {
    case "1":
      nome = readline.question("Informe o nome do contato: ");
      email = readline.question("Informe o email do contato: ");
      telefone = readline.question("Informe o telefone do contato: ");
      contatos = contatoControlador.adicionarContato();
      break;
    case "2":
      contatos = contatoControlador.listarContatos();
      contatos.forEach(contato => console.log(contatos))
      break;
    case "3":
      nome = readline.question("Informe o nome do contato: ");
      contatos = contatoControlador.buscarContato();
      if (buscar) {
        console.log(buscar.nome, "-", buscar.email, "-", buscar.telefone);
      } else {
        console.log("Produto não localizado.");
      }
      break;
    case "4":
      nome = readline.question("Informe o nome do contato: ");
      email = readline.question("Informe o email do contato: ");
      telefone = readline.question("Informe o telefone do contato: ");
      contatos = contatoControlador.atualizarContato();
      console.log(contatos);
      break;
    case "5":
      nome = readline.question("Informe o nome do contato: ");
      contatos = contatoControlador.removerContato();
      break;
    case "6":
      process.exit(0);
    default:
      console.log("\nOpção invalida\n");
  }
  readline.question("Pressione ENTER para continuar...");
}

function main() {
  while (true) {
    menu();
    const opcao = readline.question("Entre com uma opção: ");
    escolherOpcao(opcao);
  }
}

main();
