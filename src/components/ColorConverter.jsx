import React from "react";
import { useState, useEffect } from 'react';

function ColorConverter(props) {
  const [hexColor, setHexColor] = useState('');
  const [rgbColor, setRgbColor] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (hexColor.length === 7) {
      if (/^#[0-9A-Fa-f]{6}$/i.test(hexColor)) {
        setError(false);
        const r = parseInt(hexColor.slice(1, 3), 16);
        const g = parseInt(hexColor.slice(3, 5), 16);
        const b = parseInt(hexColor.slice(5, 7), 16);
        setRgbColor(`rgb(${r},${g},${b})`);
        props.setColor(`rgb(${r},${g},${b})`);
      } else {
        setError(true);
        setRgbColor('');
        props.setColor('');
      }
    }
  }, [hexColor, props]);

  const handleHexChange = (event) => {
    setHexColor(event.target.value);
  };

  return (
    <div className="converter-container">
      <input
        className="hex-input"
        placeholder="Цвет в формате HEX"
        value={hexColor}
        onChange={handleHexChange}
        maxLength={7}
      />
      {error ? <div className="error-message">ОШИБКА</div> : <div className="rgb-output"><p>{rgbColor}</p></div>}
    </div>
  );
}

  
  export default ColorConverter;
  

  