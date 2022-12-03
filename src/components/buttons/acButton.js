import React from "react";
import './acButton.css';


export const AcButton = ({ setInput, setOutput }) => {

  const handleClick = () => {
    setInput('0');
    setOutput('')
  }

  return (
    <button id="clear" type="button" onClick={handleClick}>
      AC
    </button>
  );
}