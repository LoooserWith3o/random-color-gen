import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1 style={{ color: color }}>Hello world</h1>
      <button onClick={() => setColor(randomColor())}> Generate</button>
      <div>Generated Color: {color} </div>
      {/* <div
        style={{
          display: 'flex',
          padding: '60px',
        }}
      >
        Style
      </div> */}
    </div>
  );
}
export default App;
