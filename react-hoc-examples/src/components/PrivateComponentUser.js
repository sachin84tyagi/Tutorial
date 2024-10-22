import withAuth from "../basic-hoc/withAuth";

const checkPermission = (props) => {
    return props.userRole === "user";
};

const PrivateComponentUser = () => {
    return (
        <>This is a Private Component, only visible to Users.</>
    );
}

export default withAuth(PrivateComponentUser, checkPermission);