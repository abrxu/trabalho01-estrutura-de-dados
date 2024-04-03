/**
 Nomes:
       Mauricio Soto
       João Gabriel Abreu Baumhardt da Silva
       Victor Oliveira Costa

       Trabalho de SelectionSort - Estrutura de Dados (02/04/2024)
 */

const readline = require('readline'); // ele importa o readline para ler a linha via Node.JS

const rl = readline.createInterface({ // cria uma interface de entrada e saída
  input: process.stdin,
  output: process.stdout
});

const pearsons = [
  [1, "Isaac Newton", 28],
  [2, "Friedrich Gauss", 33],
  [3, "Marie Curie", 29],
  [4, "Hedy Lamarr", 23],
  [5, "Albert Einstein", 39],
  [6, "Nicolau Copernico", 30],
  [7, "Galileu Galilei", 25],
  [8, "Alexander Volta", 36],
  [9, "André-Marie Ampère", 23],
  [10, "James Clerk Maxwell", 25],
  [11, "James Prescott Joule", 33],
  [12, "James Watt", 23],
  [13, "Archimedes de Siracusa", 39],
  [14, "Simom Ohm", 35]
]

// O código abaixo utiliza SelectionSort para ordenar o array bidimensional acima. Para ordenar por ID, Nome e Idade, basta alterar a posição do array que está dentro do pearsons[i] como está nos códigos seguintes.

function sortByName() { // Cria uma função para organizar pelo nome
  for (let i = 0; i < pearsons.length; i++) { // Cria um laço de repetição "for" que percorre as pessoas no array "pearsons"
    let minName = pearsons[i]; // salva a pessoa com o menor nome na variável minName
    let minIndex = i; // salva o índice da pessoa com o menor nome na variável minIndex

    for (let j = i + 1; j < pearsons.length; j++) { // Cria um laço de repetição "for" que acessa o item seguinte do laço anterior no array "pearsons"
      if (pearsons[j][1] < minName[1]) { // verifica a condição se o NOME (está na posição 1 do array bidimensional) da pessoa seguinte ao looping anterior é menor que o minName (pessoa salva no loop anterior)
        minName = pearsons[j]; // se for menor, reescreve-se o minName com este nome "menor"
        minIndex = j; // atualiza o minIndex para o item menor
      }
    }

    if (minIndex !== i) { // verifica a condição de se o minIndex é diferente do index atual no looping
      let temp = pearsons[i]; // guarda em uma variável temporária o array na posição "i" que está dentro dentro do array "pearsons"
      pearsons[i] = pearsons[minIndex]; // troca a pessoa no indice "i" pela pessoa com o menor índice
      pearsons[minIndex] = temp; // armazena a pessoa com o menor índice em uma variável temporária
    }
  }
}

function sortByID() {
  for (let i = 0; i < pearsons.length; i++) {
    let minName = pearsons[i];
    let minIndex = i;

    for (let j = i + 1; j < pearsons.length; j++) {
      if (pearsons[j][0] < minName[0]) {
        minName = pearsons[j];
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = pearsons[i];
      pearsons[i] = pearsons[minIndex];
      pearsons[minIndex] = temp;
    }
  }
}

const sortByAge = () => {
  for (let i = 0; i < pearsons.length; i++) {
    let minName = pearsons[i];
    let minIndex = i;

    for (let j = i + 1; j < pearsons.length; j++) {
      if (pearsons[j][2] < minName[2]) {
        minName = pearsons[j];
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = pearsons[i];
      pearsons[i] = pearsons[minIndex];
      pearsons[minIndex] = temp;
    }
  }
}

function showMenu() {
  console.log("Escolha uma opção:");
  console.log("1. Ordenar por Nome");
  console.log("2. Ordenar por ID");
  console.log("3. Ordenar por Idade");
  console.log("0. Sair");
}

function executeOption(option) { // função que executa a função de acordo com a opção escolhida pelo usuário
  switch (option) {
    case '1':
      sortByName();
      console.log("Ordenado por Nome:");
      console.log(pearsons);
      break;
    case '2':
      sortByID();
      console.log("Ordenado por ID:");
      console.log(pearsons);
      break;
    case '3':
      sortByAge();
      console.log("Ordenado por Idade:");
      console.log(pearsons);
      break;
    case '0':
      rl.close();
      break;
    default:
      console.log("Opção inválida!");
  }
}

function startMenu() {
  showMenu();
  rl.question("Opção: ", function(option) {
    executeOption(option);
    startMenu();
  });
}

startMenu();