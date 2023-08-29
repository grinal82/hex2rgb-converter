import React, { useState } from 'react';
import "./App.css";
import BackgroundColor from './components/BackgroundColor';


function App() {
  
  const [color, setColor] = useState('');

  return (
    <div>
      <BackgroundColor color={color} setColor={setColor} />
    </div>
  );
}

export default App;
