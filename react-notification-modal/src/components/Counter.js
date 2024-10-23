import { useEffect, useState } from "react";

//const intervalTime = 5000
//let debounce
const Counter = ({ handleIsOpen, handleMessage }) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [z, setZ] = useState(0)

    const incX = () => {
        setX((prevx) => prevx + 1)
        handleMessage('Counter X incremented by 1 successfully.....')
        handleIsOpen(true)
    }

    const incY = () => {
        setY(x + 10)
        handleMessage('Counter Y incremented by 10 successfully.....')
        handleIsOpen(true)
    }

    const incZ = () => {
        setZ(x + 100)
        handleMessage('Counter Z incremented by 100 successfully.....')
        handleIsOpen(true)
    }

    const decX = () => {
        setX(x - 1)
        handleMessage('Counter X decremented by 1 successfully.....')
        handleIsOpen(true)
    }
    const decY = () => {
        setY(x - 10)
        handleMessage('Counter Y decremented by 10 successfully.....')
        handleIsOpen(true)
    }
    const decZ = () => {
        setZ(x - 100)
        handleMessage('Counter Z decremented by 10 successfully.....')
        handleIsOpen(true)
    }

    return (<>

        {x} | {y} | {z}
        <br />
        <button onClick={incX}>X+</button>
        <button onClick={incY}>Y+</button>
        <button onClick={incZ}>Z+</button> |&nbsp;
        <button onClick={decX}>X-</button>
        <button onClick={decY}>Y-</button>
        <button onClick={decZ}>Z-</button>

    </>);
}

export default Counter;