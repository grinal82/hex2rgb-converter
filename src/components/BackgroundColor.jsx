import React from "react";
import ColorConverter from "./ColorConverter";

function BackgroundColor(props) {
  const { color } = props;

  const backgroundStyle = {
    backgroundColor: color,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.5s ease',
  };

  return (
    <div style={backgroundStyle}>
      <ColorConverter setColor={props.setColor} />
    </div>
  );
}

export default BackgroundColor