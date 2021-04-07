import './App.css';
import TTS from 'text-to-speech-offline';
import { useEffect } from 'react';
require('talkify-tts/dist/talkify.min.js');

function App() {
  const textToSpeak =
    'Prosegui per 300 metri, alla rotonda prendi la seconda uscita';
  const speakLibrary1 = () => {
    console.log('speak 1');
    // TTS(string, language, volume, rate, pitch)
    TTS(textToSpeak, 'it-IT');
  };

  const speakLibrary2 = () => {
    console.log('speak 2');
    window.responsiveVoice.speak(textToSpeak, 'Italian Female');
  };

  const noInteraction = () => {
    setTimeout(() => {
      TTS('TTS', 'it-IT');
    }, 1000);
    setTimeout(() => {
      window.responsiveVoice.speak(' Responsive Voice', 'Italian Female');
    }, 4000);
  };

  useEffect(() => {
    noInteraction();
  }, []);

  return (
    <div className='App'>
      <h1>Test Text to speech</h1>
      <div className='row'>
        <button onClick={speakLibrary1}>
          Speak with text-to-speech-offline
        </button>
      </div>
      <div className='row'>
        <button onClick={speakLibrary2}>Speak with responsivevoice.org</button>
      </div>
      <div className='row'>
        <button onClick={noInteraction}>With timeout</button>
      </div>
    </div>
  );
}

export default App;
