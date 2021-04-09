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
        <div className='column'>
          <div className='row'>
            <h3>Text to speech offline</h3>
          </div>
          <div>
            <button onClick={speakLibraryTTS}>Speak</button>
            <p className='desc'>Simple use with click</p>
          </div>
          <div>
            <button onClick={subsequentVoicesTTS}>Subsequent voices</button>
            <p className='desc'>Different voice every 2,5s</p>
          </div>
        </div>
        <div className='column'>
          <div className='row'>
            <h3>Responsive voice</h3>
          </div>
          <div>
            <button onClick={speakLibraryResponsiveVoice}>Speak</button>
            <p className='desc'>Simple use with click</p>
          </div>
          <div>
            <button onClick={subsequentVoicesReesponsiveVoice}>
              Subsequent voices
            </button>
            <p className='desc'>Different voice every 2,5s</p>
          </div>
        </div>
      </div>

      <div className='row'>
        <h3>Timeout test</h3>
      </div>
      <div>
        <button onClick={noInteraction}>With timeout</button>
        <p className='desc'>
          Voice with TTS after 2s, voice with ResponsiveVoice after 4s
        </p>
      </div>

      <div className='row'></div>

      <div>
        <div>
          <h3>References</h3>
        </div>
        <div>
          <p className='desc'>
            https://github.com/faktaarief/text-to-speech-off
          </p>
          <p className='desc'>https://responsivevoice.org/</p>
        </div>
      </div>
    </div>
  );
}

export default App;
