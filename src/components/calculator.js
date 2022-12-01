import React, { useState } from "react";
import './calculator.css';
import { CalculatorDisplay } from "./calculatorDisplay";
import { CalculatorKeypad } from "./calculatorKeypad";

export const Calculator = () => {

  const [input, setInput] = useState('0');
  const [output, setOutput] = useState('');


  return (
    <div id='calculator'>
      <CalculatorDisplay
        input={input}
        setInput={setInput}
        output={output} />
      <CalculatorKeypad
        setInput={setInput}
        setOutput={setOutput}
        input={input}
        output={output} />
    </div>
  );
}