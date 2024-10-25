import { useCallback, useState } from "react";
let debounce
let throttle = true
const useCounter = (initialValue) => {
    const [z, setZ] = useState(initialValue)
    const incZ = useCallback(() => {
        clearTimeout(debounce)
        debounce = setTimeout(() => {
            setZ((prev) => prev + 100)
        }, 2000)
    })

    const decZ = useCallback(() => {
        if (throttle) {
            setZ((prev) => prev - 100)
            throttle = false
            setTimeout(() => {
                throttle = true
            }, 2000)
        }
    })
    return [z, incZ, decZ];
}

export default useCounter;