import CounterComp from "../components/Counter"
const Counter = ({ handleSum }) => {
    return (
        <>
            <h3>Counter Page</h3>
            <CounterComp handleSum={handleSum}></CounterComp>
        </>
    )
}

export default Counter