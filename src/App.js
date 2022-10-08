import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

//PlusMinus function
const plusMinus = (e)=>{
  setInput(input.append('e.target.value'))
}
 //Input function
  const numValue = (e) =>{
    setInput(input.concat(e.target.innerText))
  };
  //Percentage function
  const numPercent = () =>{
    if (input.startsWith('%')) {
      return
    } else{setInput(input/100).toString() }
    
  }
  //Mulitiplication funtion
  const numMultiply = (e) =>{
    setInput(Number(input.concat(e.target.value).toString()).toFixed(2))    
  }
  //Calculation
  const calculation = () =>{
    try {
      setInput(eval(input).toString())
    } catch (error) {
      setInput('error');
    }

  }
  //All-clear function
  const allClear = () => {
    setInput('')
  };
  //Backspace funtion
 const backSpace =  ()=>{setInput(input.slice(0, -1))}
  return (
  <div className='app-container'>
    <div className='calc-container'>
    <div className='display'>{input}</div>
      <button className='button' onClick={allClear}>AC</button>
      <button className='button' onClick={backSpace}>C</button>
      <button className='button'value='-'onClick={plusMinus}>+/-</button>
      <button className='button' onClick={numPercent}>%</button>
      <button className='button' onClick={numValue}>/</button>
      <button className='button' onClick={numValue}>7</button>
      <button className='button' onClick={numValue}>8</button>
      <button className='button' onClick={numValue}>9</button>
      <button className='button' value='*' onClick={numMultiply}>X</button>
      <button className='button' onClick={numValue}>4</button>
      <button className='button' onClick={numValue}>5</button>
      <button className='button' onClick={numValue}>6</button>
      <button className='button' onClick={numValue}>-</button>
      <button className='button' onClick={numValue}>1</button>
      <button className='button' onClick={numValue}>2</button>    
      <button className='button' onClick={numValue}>3</button>
      <button className='button' onClick={numValue}>+</button>
      <button className='button' onClick={numValue}>0</button>
      <button className='button' onClick={numValue}>.</button>
      <button className='button' onClick={calculation}>=</button>
     </div>
  </div>
  )
}

export default App;
