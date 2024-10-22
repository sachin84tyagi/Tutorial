import React from "react";

function withFeatureToggle(WrappedComponent, featureEnabled) {
    return function (props) {
        return featureEnabled ? <WrappedComponent {...props} /> : <></>;
    };
}

const NewFeatureComponent = () => {
    return (
        <div>
            <button>New Feature</button>
        </div>
    );
};

// Global Feature Toggle.
const enableNewFeatures = false;

const NewFeatureComponentWithFeatureToggle = withFeatureToggle(
    NewFeatureComponent,
    enableNewFeatures
);

export default function App() {
    return (
        <div className="App">
            <NewFeatureComponentWithFeatureToggle />
        </div>
    );
}