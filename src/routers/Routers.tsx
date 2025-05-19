import {Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/home";
import Login from "../pages/Login/login";

const appRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
        
    )
}

export default appRoutes;