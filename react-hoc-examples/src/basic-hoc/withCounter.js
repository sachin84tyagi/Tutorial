import { useState } from "react";

const withCounter = (WrappedComponent) => {
    return (
        function (props) {
            const [x, setX] = useState(0)
            const incX = () => setX(x + 1)
            const decX = () => setX(x - 1)
            return <>
                <div style={{ color: "blue", fontWeight: "bold" }}><WrappedComponent {...props} x={x} ></WrappedComponent></div>
                <button onClick={incX}>+X</button>&nbsp;|&nbsp;
                <button onClick={decX}>-X</button><hr />
            </>
        }
    )
}

export default withCounter;