import React from "react";
import { AcButton } from "./buttons/acButton";
import { EqualButton } from "./buttons/equalButton";
import { FigureButton } from "./buttons/figureButton";
import './calculatorKeypad.css';


export const CalculatorKeypad = ({ setInput, setOutput, input, output }) => {

  const handleClickNumbers = (e) => {

    if (input === '0' && output === '') {
      setInput(e.target.innerText);
      setOutput(e.target.innerText);
    } else if (output[output.length - 1] === '0' && e.target.innerText === '0') {
      setInput(input);
      setOutput(output);
    } else if (input === '+' || input === '/' || input === '-' || input === '*') {
      if (output === '+' || output === '/' || output === '*') {
        setInput(e.target.innerText);
        setOutput(e.target.innerText);
      } else {
        setInput(e.target.innerText);
        setOutput(prevOutput => prevOutput + e.target.innerText);
      }
    } else {
      setInput(prevInput => prevInput + e.target.innerText);
      setOutput(prevOutput => prevOutput + e.target.innerText);
    }
  }

  const handleClickPoint = (e) => {
    if (!input.includes('.') && output === '') {
      setInput(prevInput => prevInput + '.');
      setOutput(prevOutput => prevOutput + input + '.');
    } else if (!input.includes('.')) {
      setInput(prevInput => prevInput + '.');
      setOutput(prevOutput => prevOutput + '.');
    }

  }

  const handleClickOperators = (e) => {

    setInput(e.target.innerText);

    if (output[output.length - 1] !== '+' && output[output.length - 1] !== '/' && output[output.length - 1] !== '*' && output[output.length - 1] !== '-') {
      setOutput(prevOutput => prevOutput + e.target.innerText);
    } else {
      setOutput(prevOutput => prevOutput.slice(0, prevOutput.length - 1) + e.target.innerText)
    }
  }

  const handleClickMinus = (e) => {
    const REGEXP = /\d[-+*/]/g;
    setInput(e.target.innerText);

    if (output[output.length - 1] !== '+' && output[output.length - 1] !== '/' && output[output.length - 1] !== '*' && output[output.length - 1] !== '-') {
      setOutput(prevOutput => prevOutput + e.target.innerText);
    } else if (REGEXP.test(output.slice(-2))) {
      setOutput(prevOutput => prevOutput + e.target.innerText);
    } else {
      setOutput(prevOutput => prevOutput.slice(0, prevOutput.length - 1) + e.target.innerText)
    }
  }

  const handleClickEqual = (e) => {
    let result = Function(`return ${output}`)();
    setInput(e.target.innerText);
    setOutput(result);
  }


  return (
    <div id="keyPad">
      <AcButton
        setInput={setInput}
        setOutput={setOutput} />
      <FigureButton
        className='figureButton operators'
        name='divide'
        figure='/'
        setInput={setInput}
        input={input}
        handleClick={handleClickOperators} />
      <FigureButton
        className='figureButton operators'
        name='multiply'
        figure='*'
        setInput={setInput}
        input={input}
        handleClick={handleClickOperators} />
      <FigureButton
        className='figureButton operators'
        name='subtract'
        figure='-'
        setInput={setInput}
        input={input}
        handleClick={handleClickMinus} />
      <FigureButton
        className='figureButton operators'
        name='add'
        figure='+'
        setInput={setInput}
        input={input}
        handleClick={handleClickOperators} />
      <FigureButton
        className='figureButton'
        name='one'
        figure='1'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='two'
        figure='2'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='three'
        figure='3'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='four'
        figure='4'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='five'
        figure='5'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='six'
        figure='6'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='seven'
        figure='7'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='eight'
        figure='8'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='nine'
        figure='9'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='zero'
        figure='0'
        setInput={setInput}
        input={input}
        handleClick={handleClickNumbers} />
      <FigureButton
        className='figureButton'
        name='decimal'
        figure='.'
        setInput={setInput}
        input={input}
        handleClick={handleClickPoint} />
      <EqualButton
        setInput={setInput}
        handleClick={handleClickEqual} />
    </div>
  );
}