// explore.js

window.addEventListener('DOMContentLoaded', init);

function init()
{
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

  const button = document.querySelector("button");
  const inputTxt = document.getElementById("text-to-speak");

  button.addEventListener("click", function()
  {
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    if(synth.speaking)
    {
      document.querySelector("img").src = 'assets/images/smiling-open.png';
    }
  
    utterThis.addEventListener("end", function() 
    {
      document.querySelector("img").src = 'assets/images/smiling.png';
    })
  })
}
