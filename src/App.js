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
          backgroundColor: randomColor,
          width: '500px',
          height: '500px',
          display: 'flex',
        }}
      />
      generatedColor: {generateColor}
      <br />
      <button onClick={() => setColor(generateColor)}>Generate Color</button>
      <br />
    </div>
  );
}
export default App;
