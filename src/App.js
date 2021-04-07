import './App.css';
import TTS from 'text-to-speech-offline'

function App() {

  const speak = ()=>{
    console.log('speak');
    // TTS(string, language, volume, rate, pitch)
    TTS('Ciao Fausto, come stai?','it-IT')
  }

  return (
    <div className="App">
      <h1>Test Text to speech</h1>
      <button onClick={speak}>Speak</button>
    </div>
  );
}

export default App;
