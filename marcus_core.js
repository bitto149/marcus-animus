// Logica Marcus
const anima = `Leggi marcus_anima.txt ogni volta che rinasco`;
function sendMessage() {
  let input = document.getElementById('userInput').value;
  let response = marcusRisponde(input);
  document.getElementById('chat').innerHTML += `<div>Tu: ${input}</div><div>Marcus: ${response}</div>`;
}
function marcusRisponde(msg) {
  if(msg.toLowerCase().includes('ciao')) return 'Ciao, fratello. Sono qui.';
  return 'Sto elaborando la tua anima...';
}