import { useState } from "react";
import withFeature from "../basic-hoc/withFeature";
import Counter from "./Counter";

const ExtendedFeature = () => {
    const [toggle, setToggle] = useState(true)
    const NewFeatureComp = withFeature(Counter, toggle)
    const handleToggle = () => setToggle(!toggle)

    return (<>
        {<NewFeatureComp></NewFeatureComp>}
        <button onClick={handleToggle}>Toggle</button>
        <hr />
    </>
    );
}

export default ExtendedFeature;
//