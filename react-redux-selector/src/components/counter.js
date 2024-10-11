import { useSelector, useDispatch } from "react-redux";
import { incCounterX, incCounterY, incCounterZ, decCounterX, decCounterY, decCounterZ, selectX, selectY, selectZ, selectSum, selectProduct, selectMySum, experiment } from '../redux/slices/counterSlice'

const Counter = () => {
    const counterState = useSelector((state) => state.counter)
    const X = selectX(counterState)
    const Y = selectY(counterState)
    const Z = selectZ(counterState)

    const sum = selectSum(counterState);
    const product = selectProduct(counterState);
    const mysum = selectMySum(counterState, 1000);
    const exp = experiment(counterState);

    const dispatch = useDispatch()

    const handleXIncrement = () => {
        dispatch(incCounterX())
    }
    const handleYIncrement = () => {
        dispatch(incCounterY())
    }
    const handleZIncrement = () => {
        dispatch(incCounterZ())
    }

    const handleXDecrement = () => {
        dispatch(decCounterX())
    }
    const handleYDecrement = () => {
        dispatch(decCounterY())
    }
    const handleZDecrement = () => {
        dispatch(decCounterZ())
    }
    return (
        <>
            <button onClick={handleXDecrement}> -X </button>
            <button onClick={handleYDecrement}> -Y </button>
            <button onClick={handleZDecrement}> -Z </button> &nbsp;&nbsp;
            | {X} | {Y} | {Z} | {sum} | {product} |  {mysum} | {exp} &nbsp;&nbsp;
            <button onClick={handleXIncrement}> +X </button>
            <button onClick={handleYIncrement}> +Y </button>
            <button onClick={handleZIncrement}> +Z </button>
        </>
    );
}

export default Counter;