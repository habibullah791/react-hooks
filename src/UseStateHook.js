import { useState } from 'react';
import './App.css';

function UseStateHook() {

  // when you initialize the sate as in function
  //  it will only execute the first time your component
  //  render not every time your state changes

  const [count, setCount] = useState(() => 1);

  // make sure you change your shate through the previous state 
  const incerementCount = () => {
    setCount(prevCount => prevCount + 1);
  }

  const decrementCount = () => {
    if (count < 1) return alert("Less Than One !")
    setCount(prevCount => prevCount - 1);

  }

  return (
    <div className="App">
      <button type='button' onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button type='button' onClick={incerementCount}>+</button>
    </div>
  );
}

export default UseStateHook;
