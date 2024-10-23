import { useState } from "react";

const WithCounter = (WrappedComponent) => {
    return (props) => {
        const [count, setCount] = useState(0);
        const increment = () => setCount((count) => count + 1);
        return <WrappedComponent count={count} increment={increment} {...props} />;
    };
};
const ClickCounter = (props) => {
    return <button onClick={props.increment}>clicked {props.count} times</button>;
};
export default WithCounter(ClickCounter);


// export const WithCounter = (WrappedComponent) => {
//     return (props) => {
//         const [count, setCount] = useState(0);
//         const increment = () => setCount((count) => count + 1);
//         return <WrappedComponent count={count} increment={increment} {...props} />;
//     };
// };


