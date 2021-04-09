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
    <div className='App container'>
      <h1>Test Text to speech</h1>
      <p className='alert alert-warning mb-4'>
        The application tries to speak with TTS after 2s and with
        ResponsiveVoice after 4s automatically
      </p>
      <h2 className='mt-4'>Interaction tests</h2>
      <div className='card'>
        <div className='row card-body'>
          <div className='col-sm'>
            <div>
              <h3>Text to speech offline</h3>
            </div>
            <div>
              <button className='btn btn-primary' onClick={speakLibraryTTS}>
                Speak
              </button>
              <p className='desc'>Simple use with click</p>
            </div>
            <div>
              <button className='btn btn-primary' onClick={subsequentVoicesTTS}>
                Subsequent voices
              </button>
              <p className='desc'>Different voice every 2,5s</p>
            </div>
          </div>
          <div className='col-sm'>
            <div>
              <h3>Responsive voice</h3>
            </div>
            <div>
              <button
                className='btn btn-primary'
                onClick={speakLibraryResponsiveVoice}
              >
                Speak
              </button>
              <p className='desc'>Simple use with click</p>
            </div>
            <div>
              <button
                className='btn btn-primary'
                onClick={subsequentVoicesReesponsiveVoice}
              >
                Subsequent voices
              </button>
              <p className='desc'>Different voice every 2,5s</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className='mt-4'>Timeout tests</h2>

      <div className='card'>
        <div className='row card-body'>
          <div className='col-sm'>
            <button className='btn btn-primary' onClick={noInteraction}>
              Speak with timeout
            </button>
            <p className='desc'>
              Voice with TTS after 2s, voice with ResponsiveVoice after 4s
            </p>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <div>
          <h2>References</h2>
        </div>
        <div>
          <p className=''>
            <a href='https://github.com/faktaarief/text-to-speech-off'>
              https://github.com/faktaarief/text-to-speech-off
            </a>
            <br />
            <a href='https://responsivevoice.org/'>
              https://responsivevoice.org/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
