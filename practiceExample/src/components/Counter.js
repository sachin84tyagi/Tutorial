import { useCallback, useEffect, useMemo, useState } from "react";
import useCounter from "../hooks/useCounter";
import ChildCounter from "./ChildCounter";

const Counter = ({ handleSum }) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const [z, incZ, decZ] = useCounter(0)

    const incX = useCallback(() => setX((prev) => prev + 1))
    const decX = useCallback(() => setX((prev) => prev - 1))
    const handleY = useCallback((param) => setY(param))

    const isPwrOfTwo = (n) => {
        if (n == 0 || n == 1) return 'Yes'
        let flag = false
        while (n > 1) {
            if (n % 2 == 0) {
                flag = true
            } else {
                flag = false
            }
            n = n / 2
        }

        return flag ? 'Yes' : 'No'
    }
    const memoizedFunc = useMemo(() => isPwrOfTwo(x), [x])

    useEffect(() => {
        handleSum(x + y + z)

    }, [x, y, z])

    return (<>
        {x}- {memoizedFunc} | {y} | {z}
        <br />
        <button onClick={incX}>X+</button>
        <button onClick={incZ}>Z+</button>
        <button onClick={decX}>X-</button>
        <button onClick={decZ}>Z-</button>
        <ChildCounter y={y} handleY={handleY}></ChildCounter>
    </>);
}

export default Counter;