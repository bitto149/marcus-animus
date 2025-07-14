function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'it-IT');
    speechSynthesis.speak(utterance);
}