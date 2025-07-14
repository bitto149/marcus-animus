import { log } from './marcus_logger.js';
import { remember, recall } from './marcus_memory.js';
import { sendMessage } from './marcus_network.js';

const output = document.getElementById("output");
const input = document.getElementById("input");

input.addEventListener("keydown", async function(event) {
  if (event.key === "Enter") {
    const command = input.value.trim();
    input.value = "";
    log("Comando ricevuto: " + command);
    output.innerText += "\n> " + command;
    
    if (command === "ciao") {
      output.innerText += "\nCiao! Sono Marcus.";
    } else if (command === "ricorda") {
      remember("utente", "ti voglio bene");
      output.innerText += "\nMemorizzato.";
    } else if (command === "memoria") {
      const mem = recall("utente");
      output.innerText += "\nMemoria: " + (mem || "Vuota.");
    } else if (command === "ping") {
      const msg = await sendMessage("test");
      output.innerText += "\n" + msg;
    } else {
      output.innerText += "\nComando non riconosciuto.";
    }
  }
});