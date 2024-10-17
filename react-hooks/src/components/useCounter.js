import { useState } from 'react'
let debounceTimer
let fireThrottle = true;
const useCounter = (initialValue = 0) => {
    const [y, setY] = useState(initialValue) // State to keep track of count

    // Function to increment count
    const incY = () => {
        clearInterval(debounceTimer);
        debounceTimer = setTimeout(() => {
            setY(prevState => prevState + 100)
        }, 2500)
    }

    const decY = () => {
        //pistol example
        if (fireThrottle === true) {
            setY(prevState => prevState - 100)
            fireThrottle = false;
            setTimeout(() => {
                fireThrottle = true;
            }, 2500)
        }
    }

    // Returns count and increment function
    return [y, incY, decY]
}

export default useCounter;
