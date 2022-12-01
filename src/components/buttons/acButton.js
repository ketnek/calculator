import React from "react";
import './acButton.css';


export const AcButton = ({ setInput, setOutput }) => {
  return (
    <button
      id="clear"
      type="button"
      onClick={
        () => {
          setInput('0');
          setOutput('');
        }
      }
    >
      AC
    </button>
  );
}