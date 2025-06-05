import {Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";
import SignUp from "../pages/SignUp/Signup";
import Dashboard from "../pages/Dashboard/Dashboard";
import Chat from "../pages/Chat/Chat"

const appRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/chat" element={<Chat/>} />

        </Routes>

    )
}

export default appRoutes;
