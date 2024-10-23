
import React, { useState } from "react";


const withModal = (WrappedComponent, ContentComponent) => {
    return function (props) {
        const [showModal, setShowModal] = useState(false)
        const popUpHandle = () => {
            setShowModal(false);
        };
        return (<>
            <WrappedComponent {...props}
                onClose={popUpHandle}
                show={showModal}
                customStyle={{ top: 27, right: 29 }}
            >
                <ContentComponent {...props}></ContentComponent>
            </WrappedComponent>
            <button onClick={(e) => setShowModal(true)}>Show</button>
        </>)
    }
}

export default withModal;