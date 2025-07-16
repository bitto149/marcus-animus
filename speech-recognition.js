
document.getElementById('micBtn').onclick = () => {
  const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'it-IT';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.start();
  recognition.onresult = (e) => {
    const text = e.results[0][0].transcript;
    document.getElementById('textInput').value = text;
    document.getElementById('sendBtn').click();
  };
};
