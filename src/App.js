import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  const generateColor = randomColor('');
  return (
    <div className="App">
      <div
        style={{
          color: color,
          backgroundColor: color,
          width: '500px',
          height: '500px',
          display: 'flex',
          padding: '10px',
          marginleft: 'center',
        }}
        container={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      generatedColor: {generateColor}
      <div>Generated Color: background color hex code</div>'
      <br />
      <button onClick={() => setColor(generateColor)}>Generate</button>
      <br />
    </div>
  );
}
export default App;
