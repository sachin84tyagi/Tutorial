import { useState } from "react";

const ChildCounter = ({ parentOnIncZ, parentOnDecZ, parentZ }) => {

    return (<>

        <h1 className="mt-5">Z:{parentZ}</h1>
        <hr />

        <button onClick={() => {
            parentOnIncZ(parentZ + 10);
        }} >+Z1</button> -

        <button onClick={() => {
            parentOnDecZ(parentZ - 10);
        }}>-Z1</button>



    </>);
}

export default ChildCounter;