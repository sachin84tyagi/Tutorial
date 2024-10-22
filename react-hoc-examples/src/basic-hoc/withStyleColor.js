import React from "react";

const withStyleColor = (WrappedComponent) => {
    return (
        function (props) {
            return <div style={{ color: "#F00" }}><WrappedComponent {...props}></WrappedComponent></div>
        }
    )
}

export default withStyleColor;