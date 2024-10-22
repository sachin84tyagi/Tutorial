import withAuth from "../basic-hoc/withAuth";

const checkPermission = (props) => {
    return props.userRole === "admin";
};

const PrivateComponent = () => {
    return (
        <>This is a Private Component, only visible to Admin.</>
    );
}

export default withAuth(PrivateComponent, checkPermission);