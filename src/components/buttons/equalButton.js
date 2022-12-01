import React from "react";
import './equalButton.css';


export const EqualButton = ({ handleClick }) => {
  return (
    <button id="equals" onClick={handleClick}>
      =
    </button>
  );
}