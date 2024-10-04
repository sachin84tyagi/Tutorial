import { useDispatch, useSelector } from "react-redux";
import { handleInc, handleDec, handleIncByVal, handleDecByVal } from "../../redux/slices/counterSlice";

const Counter = () => {
    const ctrVal = 10
    const value = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    const onInc = () => {
        dispatch(handleInc())
    }

    const onDec = () => {
        dispatch(handleDec())
    }

    const onIncByVal = (val) => {
        dispatch(handleIncByVal(val))
    }

    const onDecByVal = (val) => {
        dispatch(handleDecByVal(val))
    }

    return (
        <>
            <button onClick={() => onIncByVal(ctrVal)}>+{ctrVal}</button>&nbsp;
            <button onClick={onInc}>+</button>&nbsp;
            <span>{value}</span>&nbsp;
            <button onClick={onDec}>-</button>&nbsp;
            <button onClick={() => onDecByVal(ctrVal)}>-{ctrVal}</button>
        </>
    );
}

export default Counter;