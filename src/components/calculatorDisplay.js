import React from "react";
import './calculatorDisplay.css';


export const CalculatorDisplay = ({ input, output }) => {
  return (
    <div id="displayWrapper">
      <p id="displayOutput">{output}</p>
      <p id="display">{input}</p>
    </div>
  );
}