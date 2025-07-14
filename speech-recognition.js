// speech-recognition.js
// Riconoscimento vocale base con Web Speech API (solo browser compatibili)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'it-IT';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

export function startListening(callback) {
    recognition.start();
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.trim();
        callback(transcript);
    };
    recognition.onerror = (event) => {
        console.error('Errore nel riconoscimento vocale:', event.error);
        callback(null);
    };
}