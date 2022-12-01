import React from "react";
import './figureButton.css';


export const FigureButton = ({ name, className, figure, handleClick }) => {

  return (
    <button id={name} className={className} onClick={handleClick}> {figure} </button>
  );
}
