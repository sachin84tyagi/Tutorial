// Filename - App.js

import React, { useState, useCallback } from 'react';
const funccount = new Set();
const Counter2 = () => {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)

    const incrementCounter = () => {
        setCount(count + 1)
    }

    const decrementCounter = () => {
        setCount(count - 1)
    }

    const incrementNumber = () => {
        setNumber(number + 1)
    }

    funccount.add(incrementCounter);
    funccount.add(decrementCounter);
    funccount.add(incrementNumber);

    return (
        <div>
            <br />
            <br />
            <p>Count: {count}</p>
            <p>Function Count: {funccount.size}</p>
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <button onClick={incrementNumber}>
                increase number
            </button>
        </div>
    )
}


export default Counter2;
