import './App.css';
import { css, cx } from '@emotion/css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <h1 style={{ color: `${color}` }}>Hello world</h1>
      <button onClick={() => setColor(randomColor())}>
        {' '}
        Create random Color
      </button>
      <div>Generated Color: {color} </div>
    </div>
  );
}

export default App;
