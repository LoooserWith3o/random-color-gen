import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  // const generateColor = randomColor();
  return (
    <div className="App">
      <h1 style={{ color: color }}>Made with React</h1>
      <div
        style={{
          backgroundColor: color,
        }}
      >
        Generated Color: {color}
      </div>
      <div
        style={{
          // color: color,
          backgroundColor: color,
          width: '100vw',
          height: '500px',
          display: 'flex',
          padding: '10px',
          marginleft: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      <br />
      <button onClick={() => setColor(randomColor())}>Generate</button>
      <br />
    </div>
  );
}
export default App;
