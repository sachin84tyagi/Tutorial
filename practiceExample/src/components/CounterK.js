import { useDispatch, useSelector } from "react-redux";
import { incK, decK } from "../redux/sliceCounter/sliceCounter";
const CounterK = () => {
    const k = useSelector((state) => state.counterReducer.k)
    const dispatch = useDispatch()

    const handleIncK = () => dispatch(incK())
    const handleDecK = () => dispatch(decK())
    return (<>
        {k}
        <button onClick={handleIncK}>K+</button>
        <button onClick={handleDecK}>K-</button>
    </>);
}

export default CounterK;