import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../Services/auth";
import BaseForm from "../../components/organisms/BaseForm/BaseForm";
import type { Field } from "../../components/organisms/BaseForm/BaseForm";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";


function login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const fields: Field[] = [
        {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your Email"
        },
        {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your Password"
        },
    ];
    const handleLoginSubmit = async (FormData: Record<string, string>) => {
        try {
            const data = await loginUser(FormData);
            console.log("Login successful:", data);
            navigate("/dashboard");

        } catch (error: any) {
            setErrorMessage(error.message);
        };
    }


    return (

        <section className="Login-container">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>

            <div className="Form-container">
                <h3>LOG IN</h3>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <BaseForm fields={fields} onSubmit={
                    handleLoginSubmit} buttonText="Login" className="style-login" />
                <div className="login-icons">
                    <a href="#"><FaGoogle /> Google</a>
                    <a href="#"><FaFacebook /> Facebook</a>
                </div>
                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup" aria-label="Sign up for a new account">Sign Up</Link></p>
                </div>
                <Link to="/" className="Link" aria-label="Go back to home page">Back to Home</Link>

            </div>
        </section>

    )
}


export default login; 