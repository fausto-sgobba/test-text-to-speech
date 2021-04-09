import './App.css';
import TTS from 'text-to-speech-offline';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [multipleWords, setMultipleWords] = useState([
    'Prosegui 100 metri fino alla rotonda',
    'Prendi la prima uscita a destra',
    'Tieni la destra',
    'Destinazione raggiunta',
  ]);

  const [singleWord, setSingleWord] = useState(
    'Tra 2 chilometri svolta a sinistra',
  );
  const [active, setActive] = useState();
  const [activeIndex, setActiveIndex] = useState();
  const [queue, setQueue] = useState([]);

  const startMultipleWords = () => {
    setActive('multiple');
    setQueue(multipleWords);
  };

  const startSingleWord = () => {
    setActive('single');
    setQueue([singleWord]);
  };

  const advanceQueue = useCallback(() => {
    console.log('voice ended');
    // eslint-disable-next-line no-unused-vars
    const [removed, ...remaining] = queue;
    setQueue(remaining);
  }, [queue]);

  const speak = useCallback(() => {
    const textToSpeak = queue[0];
    const lang = 'it-IT';
    const volume = 1;
    const rate = 1;
    const pitch = 1;
    let synthesis = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.addEventListener('end', advanceQueue);

    utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    synthesis.cancel();

    return synthesis.speak(utterance);
  }, [queue, advanceQueue]);

  const inputOnChange = (evt) => {
    console.log(evt);
  };

  const buttonClick = (evt) => {
    console.log(evt);
  };

  useEffect(() => {
    if (queue.length <= 0) {
      setActive();
      return;
    }
    speak(queue[0]);
  }, [queue, speak]);

  return (
    <div className='App container'>
      <h1>Test Text to speech</h1>
      <h2 className='mt-4'>Interaction tests</h2>
      <div className='card'>
        <div className='row card-body'>
          <div className='col-sm'>
            <div>
              <label>Word to speak</label>
              <form>
                <div className='form-group'>
                  <input
                    type='email'
                    className='form-control'
                    id='singleWord'
                    aria-describedby='emailHelp'
                    placeholder='Enter the word / phrase'
                    value={singleWord}
                    onChange={inputOnChange}
                  />
                </div>
              </form>
            </div>
            <div>
              <button className='btn btn-primary' onClick={startSingleWord}>
                Speak
              </button>
            </div>
          </div>
          <div className='col-sm'>
            <div>
              <form>
                <label>Words to speak</label>
                {multipleWords.map((w, i) => (
                  <div
                    key={`remove-${i}`}
                    className='form-group inline-buttons'
                  >
                    <input
                      type='email'
                      className='form-control'
                      id={`word-${i}`}
                      placeholder='Enter the word / phrase'
                      value={w}
                      onChange={inputOnChange}
                    />
                    <button
                      className='btn btn-outline-success'
                      id={`add-${i}`}
                      value={w}
                      onClick={buttonClick}
                    >
                      +
                    </button>
                    <button
                      className='btn btn-outline-danger'
                      id={`remove-${i}`}
                      value={w}
                      onClick={buttonClick}
                    >
                      -
                    </button>
                  </div>
                ))}
              </form>
            </div>
            <div>
              <button className='btn btn-primary' onClick={startMultipleWords}>
                Speak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
