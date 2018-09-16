// Initialize SpeechSynth API
const synth = window.speechSynthesis;

// Grab DOM Elements
const textForm = document.querySelector('form');
const textInput = document.querySelector('#text-input');
const voiceSelect = document.querySelector('#voice-select');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('#rate-value');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('#pitch-value');

// Initialize Voices Array
let voices = [];

// function getVoices() {
//
// }

const getVoices = () => {
  // uses getVoices method
  voices = synth.getVoices();
  console.log(voices);
  // Loop through voices and create an option for each one
  // for each loop
  voices.forEach(voice => {
    // Create option element
    const option = document.createElement('option');
    // Fill option with voice and language
    option.textContent = voice.name + '('+ voice.lang +')';
    // Set needed option attributes
    option.setAttribute('data-lang', voice.lang);
    option.setAttribute('data-name', voice.name);
    voiceSelect.appendChild(option);
  });
};

getVoices();
if(synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speak
const speak = () => {
  // Check if speaking
  if(synth.speaking) {
    console.error('Already speaking...');
    return;
  }
  if(textInput.value !== '') {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput.value);
    // Speak end
    speakText.onend = e => {
      console.log('Done speaking');
    };
    // Speak error
    SpeakText.onerror = e => {
      console.error('Something went wrong');
    };
  }
};
