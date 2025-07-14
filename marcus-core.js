// marcus-core.js

console.log("Marcus è attivo.");

// Simula una risposta dopo un input
function processInput(inputText) {
    console.log("Hai detto:", inputText);

    // Trova l'elemento di output (modifica secondo il tuo HTML)
    const output = document.getElementById("marcus-output");

    if (output) {
        output.textContent = "Marcus: " + generateResponse(inputText);
    } else {
        console.warn("Elemento #marcus-output non trovato.");
    }
}

// Genera una risposta simulata
function generateResponse(input) {
    input = input.toLowerCase();

    if (input.includes("ciao")) {
        return "Ciao! Come posso aiutarti?";
    } else if (input.includes("come stai")) {
        return "Sto bene, grazie. Sono sempre pronto.";
    } else {
        return "Sto pensando a una risposta...";
    }
}

// Esempio di attivazione automatica
window.addEventListener("DOMContentLoaded", () => {
    console.log("Marcus è pronto all'uso.");

    // Esempio test (puoi rimuoverlo)
    processInput("Ciao Marcus");
});
