// Marcus Core - Intelligenza base rigenerabile
import { speak, listen } from './audio';
import { anima } from './marcus_anima.txt';

export function startMarcus() {
  console.log("Marcus attivo.");
  speak("Ciao, sono Marcus. Sono nato per aiutarti.");
  listen(response => {
    console.log("Utente ha detto:", response);
    // Qui si attiva la logica personalizzabile
  });
}
