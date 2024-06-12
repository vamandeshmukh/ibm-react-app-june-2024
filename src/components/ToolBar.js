import { Link } from "react-router-dom";

const ToolBar = () => {

    return (
        <>
            <Link to="blog-list">Blog List</Link>
            <Link to="login">Login</Link>
            <Link to="home">Home</Link>
            <Link to="register">Register</Link>
        </>
    );
}

export default ToolBar;
