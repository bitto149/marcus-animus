
function speakText(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'it-IT';
  utterance.pitch = 1;
  utterance.rate = 0.95;
  utterance.voice = synth.getVoices().find(v => v.lang === 'it-IT' && v.name.includes('Google'));
  synth.speak(utterance);
}
