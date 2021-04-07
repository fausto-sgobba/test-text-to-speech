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
      <p className='desc'>
        The application tries to speak with TTS after 2s and with
        ResponsiveVoice after 4s automatically
      </p>
      <h2>Interaction tests</h2>
      <div className='row'>
        <button onClick={speakLibraryTTS}>
          Speak with text-to-speech-offline
        </button>
        <p className='desc'>Simple use with click</p>
      </div>
      <div className='row'>
        <button onClick={speakLibraryResponsiveVoice}>
          Speak with responsivevoice.org
        </button>
        <p className='desc'>Simple use with click</p>
      </div>
      <div className='row'>
        <button onClick={noInteraction}>With timeout</button>
        <p className='desc'>
          Voice with TTS after 2s, voice with ResponsiveVoice after 4s
        </p>
      </div>
      <div className='row'>
        <button onClick={subsequentVoicesTTS}>Subsequent voices TTS</button>
        <p className='desc'>Different voice every 2,5s</p>
      </div>
      <div className='row'>
        <button onClick={subsequentVoicesReesponsiveVoice}>
          Subsequent voices Responsive Voice
        </button>
        <p className='desc'>Different voice every 2,5s</p>
      </div>
      <h2>References</h2>
      <p className='desc'>https://github.com/faktaarief/text-to-speech-off</p>
      <p className='desc'>https://responsivevoice.org/</p>
    </div>
  );
}

export default App;
