import { useState, useEffect } from 'react';
import './main.css';

const UseEffectHook = () => {

    // when you initialize the sate as in function
    //  it will only execute the first time your component
    //  render not every time your state changes

    const [count, setCount] = useState(() => 1);


    //1.  if dependency arry is empty it will only run when the componrnt Mount 
    //2.  but if we have te dependeny array i.e the state it will run every time the state changes
    //3.  and if we have the cleanUp function in useEffect it will run every time 
    //  we can use it to remove unnecessary behavior or prevent memory leaking issues.


    useEffect(() => {

        console.log("Running");

        return () =>
            console.log("Clean Up");
    }, [count])

    return (
        <div className="App">
            <button type='button' onClick={() => setCount((prevCount) => prevCount -= 1)}>-</button>
            <span>{count}</span>
            <button type='button' onClick={() => setCount((prevCount) => prevCount += 1)}>+</button>
        </div>
    );
}

export default UseEffectHook;
