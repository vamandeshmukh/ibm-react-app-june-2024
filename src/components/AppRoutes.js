import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import Home from "./Home";
import Page404 from "./Page404";
import ToolBar from "./ToolBar";

const AppRoutes = () => {

    return (
        <>
            <BrowserRouter>
                <>
                    <ToolBar />
                </>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="home" element={<Home />} />
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Page404 />} />


                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRoutes;