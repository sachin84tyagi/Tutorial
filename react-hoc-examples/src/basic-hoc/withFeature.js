const withFeature = (WrappedComponent, enable) => {
    return function (props) {
        return enable ? <WrappedComponent {...props}></WrappedComponent> : <></>
    }
}
export default withFeature;