const withAuth = (WrappedComponent, checkPermission) => {
    return function (props) {
        return checkPermission(props) ? (<WrappedComponent {...props} ></WrappedComponent >) : <p>You are not authorize to access this page.</p>
    }
}

export default withAuth;