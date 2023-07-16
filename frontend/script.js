const fields = ["name", "height", "weight", "problem"];
let currentFieldIndex = 0;
let recognition = null;

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

function startListening() {
  const fieldId = fields[currentFieldIndex];
  const labelElement = document.querySelector(
    `label[for="${fieldId}"]`
  );
  const inputElement = document.getElementById(fieldId);

  if (recognition) {
    recognition.stop();
  }

  recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onstart = function () {
    labelElement.textContent = `Listening for ${labelElement.textContent}...`;
  };

  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    inputElement.value = transcript;
  };

  recognition.onend = function () {
    labelElement.textContent = `Spoken ${labelElement.textContent}`;
    currentFieldIndex++;

    if (currentFieldIndex < fields.length) {
      startListening();
    } else {
      currentFieldIndex = 0;
    }
  };
  speakText(fieldId);
  setTimeout(() => {
    recognition.start();
  }, 2000);
}

if (currentFieldIndex == 0) {
  speakText("welcome to health webapp");
}

function startTalking() {
  var mouth = document.querySelector(".mouth");
  mouth.classList.add("talking");
  setTimeout(function () {
    mouth.classList.remove("talking");
  }, 2000);
}
