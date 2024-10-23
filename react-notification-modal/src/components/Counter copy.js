import { useEffect, useState } from "react";
import NotificationStrip from "./NotificationStrip";
//const intervalTime = 5000
//let debounce
const Counter = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [z, setZ] = useState(0)
    const [message, setMessage] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (param) => {
        console.log('handleClick')
        setIsOpen(param)
    }

    const incX = () => {
        setX((prevx) => prevx + 1)
        setMessage('Counter X incremented by 1 successfully.....')
        setIsOpen(true)
    }
    const incY = () => {
        setY(x + 10)
        setMessage('Counter Y incremented by 10 successfully.....')
        setIsOpen(true)
    }

    const incZ = () => {
        setZ(x + 100)
        setMessage('Counter Z incremented by 100 successfully.....')
        setIsOpen(true)
    }

    const decX = () => {
        setX(x - 1)
        setMessage('Counter X decremented by 1 successfully.....')
        setIsOpen(true)
    }
    const decY = () => {
        setY(x - 10)
        setMessage('Counter Y decremented by 10 successfully.....')
        setIsOpen(true)
    }
    const decZ = () => {
        setZ(x - 100)
        setMessage('Counter Z decremented by 10 successfully.....')
        setIsOpen(true)

    }

    useEffect(() => {
        //
    })

    return (<>
        <NotificationStrip notificationProps={{
            isOpen: isOpen,
            message: message,
            onClickHandle: handleClick,
            counterValue: x
        }}></NotificationStrip>

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