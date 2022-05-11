import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  const generateColor = randomColor('');
  return (
    <div className="App">
      <h1 style={{ color: { generateColor } }}>Made with React</h1>
      <div
        style={{
          color: color,
          backgroundColor: color,
          transition: 0.8,
          width: '500px',
          height: '500px',
          display: 'flex',
          padding: '10px',
          marginleft: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <div>Generated Color: {generateColor}</div>
      <br />
      <button onClick={() => setColor(generateColor)}>Generate</button>
      <br />
    </div>
  );
}
export default App;
