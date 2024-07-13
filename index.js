// Lista de citações / List of quotes
const quotes = [
  "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.",
  "Our greatness lies not so much in being able to remake the world as being able to remake ourselves.",
  "Most smiles are started by another smile.",
  "A good rest is half the work.",
  "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
];

// Conjunto para rastrear índices usados / Set to track used indices
const usedIndexes = new Set();
// Obtendo o elemento HTML do parágrafo onde a citação será exibida / Getting the HTML paragraph element where the quote will be displayed
const quoteElement = document.getElementById("quote");

function generateQuote() {
  // Verifica se todas as citações já foram usadas / Checks if all quotes have been used
  if (usedIndexes.size >= quotes.length) {
    // Limpa o conjunto de índices usados se todas as citações tiverem sido usadas / Clears the set of used indices if all quotes have been used
    usedIndexes.clear();
  }

  while (true) {
    // Gera um índice aleatório dentro do comprimento da lista de citações / Generates a random index within the length of the quotes list
    const randomIdx = Math.floor(Math.random() * quotes.length);

    // Se o índice já foi usado, continue a gerar novos índices / If the index has already been used, continue generating new indices
    if (usedIndexes.has(randomIdx)) continue;

    // Obtém a citação usando o índice aleatório / Gets the quote using the random index
    const quote = quotes[randomIdx];
    // Define o conteúdo HTML do elemento de citação para a citação seleccionada / Sets the HTML content of the quote element to the selected quote
    quoteElement.innerHTML = quote;
    // Adiciona o índice ao conjunto de índices usados / Adds the index to the set of used indices
    usedIndexes.add(randomIdx);
    // Sai do loop / Exits the loop
    break;
  }
}
