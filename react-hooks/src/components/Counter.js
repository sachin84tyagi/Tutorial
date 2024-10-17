import { useState, useMemo, createContext, useEffect, useCallback } from "react";
import ChildCounter from "./ChildCounter";
import useCounter from "./useCounter";
export const zContext = createContext()

const Counter = ({ onSetSum }) => {
    const [x, setX] = useState(0)
    const [y, incY, decY] = useCounter(0)
    const [z, setZ] = useState(0)

    const incX = useCallback(() => {
        setX(x + 1)
    }, [x])

    const incZ = useCallback((param) => {
        setZ(param)
    })

    const decX = useCallback(() => {
        setX(x - 1)
    })

    const decZ = useCallback((param) => {
        setZ(param)
    })

    const isNumberPowerOfTwo = (n) => {
        console.log('calling isNumberPowerOfTwo')
        if (n == 0 || n == 1) return 'Yes'
        let flag = false
        while (n > 1) {
            if (n % 2 === 0) {
                flag = true
            } else {
                flag = false
            }
            n = n / 2
        }
        return flag ? 'Yes' : 'No'
    }

    useEffect(() => {
        onSetSum(x + y + z);
    }, [x, y, z])

    const memoizedFuc = useMemo(() => isNumberPowerOfTwo(x), [x])

    return (<>

        <main className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5"> X:{x} - isPowerOfTwo {memoizedFuc} | Y:{y} </h1>
                <hr />
                <button onClick={incX}>+X1</button>
                <button onClick={incY}>+Y1</button>
                &nbsp;-&nbsp;
                <button onClick={decX}>-X1</button>
                <button onClick={decY}>-Y1</button>

                <ChildCounter parentOnIncZ={incZ} parentOnDecZ={decZ} parentZ={z}></ChildCounter>

            </div>
        </main>
    </>);
}

export default Counter;