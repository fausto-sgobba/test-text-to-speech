import './App.css';
import TTS from 'text-to-speech-offline';
import { useEffect } from 'react';
require('talkify-tts/dist/talkify.min.js');

function App() {
  const textToSpeak =
    'Prosegui per 300 metri, alla rotonda prendi la seconda uscita';
  const speakLibraryTTS = () => {
    console.log('speak 1');
    // TTS(string, language, volume, rate, pitch)
    TTS(textToSpeak, 'it-IT');
  };

  const speakLibraryResponsiveVoice = () => {
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

  const directions = [
    'Prosegui 100 metri fino alla rotonda',
    'Prendi la prima uscita a destra',
    'Tieni la destra',
    'Destinazione raggiunta',
  ];
  const subsequentVoicesTTS = () => {
    const speak = (text) => TTS(text, 'it-IT');
    directions.forEach((d, i) => setTimeout(() => speak(d), 2500 * i));
  };
  const subsequentVoicesReesponsiveVoice = () => {
    const speak = (text) =>
      window.responsiveVoice.speak(text, 'Italian Female');
    directions.forEach((d, i) => setTimeout(() => speak(d), 2500 * i));
  };

  useEffect(() => {
    noInteraction();
  }, []);

  return (
    <div className='App'>
      <h1>Test Text to speech</h1>
      <div className='row'>
        <button onClick={speakLibraryTTS}>
          Speak with text-to-speech-offline
        </button>
      </div>
      <div className='row'>
        <button onClick={speakLibraryResponsiveVoice}>
          Speak with responsivevoice.org
        </button>
      </div>
      <div className='row'>
        <button onClick={noInteraction}>With timeout</button>
      </div>
      <div className='row'>
        <button onClick={subsequentVoicesTTS}>Subsequent voices TTS</button>
      </div>
      <div className='row'>
        <button onClick={subsequentVoicesReesponsiveVoice}>
          Subsequent voices Responsive Voice
        </button>
      </div>
    </div>
  );
}

export default App;
