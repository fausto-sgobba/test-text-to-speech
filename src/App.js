import './App.css';
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
  const [queue, setQueue] = useState([]);
  const [voices, setVoices] = useState([]);
  const [currentVoiceIndex, setCurrentVoiceIndex] = useState(0);

  const startMultipleWords = () => {
    speak(); // try to force iPad to enable text to speech
    setActive('multiple');
    setQueue(multipleWords);
  };

  const startSingleWord = () => {
    speak(); // try to force iPad to enable text to speech
    setActive('single');
    setQueue([singleWord]);
  };

  const advanceQueue = useCallback(() => {
    // eslint-disable-next-line no-unused-vars
    const [removed, ...remaining] = queue;
    setQueue(remaining);
  }, [queue]);

  const speak = useCallback(() => {
    const textToSpeak = queue[0];
    // const lang = 'it-IT';
    const volume = 1;
    const rate = 1;
    const pitch = 1;
    let synthesis = window.speechSynthesis;
    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.addEventListener('end', advanceQueue);

    // utterance.lang = lang;
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;
    if (voices) {
      const voice = voices[currentVoiceIndex];
      utterance.lang = voice.lang;
      utterance.voice = voice;
    }
    synthesis.cancel();

    return synthesis.speak(utterance);
  }, [queue, advanceQueue, currentVoiceIndex, voices]);

  const inputOnChange = (evt) => {
    console.log(evt.target.id);
    switch (evt.target.id) {
      case 'singleWord':
        setSingleWord(evt.target.value);
        break;
      default:
        // eslint-disable-next-line no-unused-vars
        const [_, index] = evt.target.id.split('-');
        setMultipleWords(
          Object.assign([], multipleWords, {
            [Number(index)]: evt.target.value,
          }),
        );
        break;
    }
  };

  const buttonClick = (evt) => {
    console.log(evt);
    // eslint-disable-next-line no-unused-vars
    const [action, index] = evt.target.id.split('-');
    console.log('🚀 ~ file: App.js ~ line 75 ~ buttonClick ~ [action, index]', [
      action,
      index,
    ]);
    switch (action) {
      case 'add':
        const arrWithItem = [...multipleWords];
        arrWithItem.splice(Number(index) + 1, 0, 'New Word');
        setMultipleWords(arrWithItem);
        break;
      case 'remove':
        const arrWithoutItem = [...multipleWords];
        arrWithoutItem.splice(Number(index), 1);
        setMultipleWords(arrWithoutItem);
        break;

      default:
        break;
    }
  };

  const languageOnChange = (evt) => {
    setCurrentVoiceIndex(evt.target.value);
  };

  useEffect(() => {
    if (queue.length <= 0) {
      setActive();
      return;
    }
    speak(queue[0]);
  }, [queue, speak]);

  useEffect(() => {
    setVoices(window.speechSynthesis.getVoices());
    speechSynthesis.onvoiceschanged = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
  }, []);

  useEffect(() => {
    console.log('voices', voices);
    if (voices.length) {
      const newVoiceIndex = voices.findIndex((v) => v.lang.includes('it'));
      setCurrentVoiceIndex(newVoiceIndex);
    }
  }, [voices]);

  return (
    <div className='App container'>
      <h1>Test Text to speech</h1>
      <h2 className='mt-4'>Interaction tests</h2>
      <div className='card'>
        <div className='card-body'>
          <div>
            <div className='form-group'>
              <select
                className='custom-select'
                required
                onChange={languageOnChange}
                value={currentVoiceIndex}
              >
                {voices &&
                  voices.map((voice, index) => (
                    <option
                      value={index}
                      key={index}
                      // selected={index === currentVoiceIndex}
                    >{`${voice.name} (${voice.lang})`}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm'>
              <div>
                <label>Word to speak</label>
                <form>
                  <div className='form-group'>
                    <input
                      type='email'
                      className={`form-control ${
                        active === 'single' ? 'is-valid' : ''
                      }`}
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
                  {multipleWords.map((w, i) => {
                    const activeClass =
                      active === 'multiple' && queue[0] === w ? 'is-valid' : '';
                    return (
                      <div
                        key={`remove-${i}`}
                        className='form-group inline-buttons'
                      >
                        <input
                          type='email'
                          className={`form-control ${activeClass}`}
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
                    );
                  })}
                </form>
              </div>
              <div>
                <button
                  className='btn btn-primary'
                  onClick={startMultipleWords}
                >
                  Speak
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
