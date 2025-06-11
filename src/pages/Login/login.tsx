import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginUser } from "../../Services/auth";
import BaseForm from "../../components/organisms/BaseForm/BaseForm";
import type { Field } from "../../components/organisms/BaseForm/BaseForm";
import NavItem from "../../components/organisms/NavItem/NavItem";
import Button from "../../components/atoms/Button/Button";
import Image from "../../components/atoms/Image/Image";
import RamaSecondary from "../../assets/Rama-secondary.png";    
import "./Login.css";
import LanguageSwitcher from "../../components/atoms/LanguageSwitcher/LanguageSwitcher";

function Login() {
    const { t } = useTranslation(["login"]);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");

    const fields: Field[] = [
        {
            name: "email",
            label: t('fields.email.label'),
            type: "email",
            placeholder: t('fields.email.placeholder')
        },
        {
            name: "password",
            label: t('fields.password.label'),
            type: "password",
            placeholder: t('fields.password.placeholder')
        },
    ];
    const handleLoginSubmit = async (FormData: Record<string, string>) => {
        try {
            const data = await loginUser(FormData);
            console.log("Login successful:", data);
            navigate("/dashboard");

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setErrorMessage(error.message);
        };
    }


    return (
        <>
        <NavItem>
            <LanguageSwitcher/>
            <Button type="link" destiny="/" className="Nav-links">
            {t('buttonNav')}
            </Button>
        </NavItem>
        

        <section className="Login-container">
            

            <div className="Form-container">
                <h3>{t('title')}</h3>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <BaseForm fields={fields} onSubmit={
                    handleLoginSubmit} buttonText={t('button')} className="style-login" />
                <div className="login-icons">
                    <a href="#" title='Google'><FaGoogle /> </a>
                    <a href="#" title='Facebook'><FaFacebook /></a>
                </div>
                <div className="login-footer">
                    <p>{t('forgotPassword')}<Link to="/signup" aria-label="Sign up for a new account">{t('signup')}</Link></p>
                </div>
                

            </div>
            <Image src={RamaSecondary} alt="Rama" aria-hidden="true" className="Rama-secondary"></Image>
            
        </section>
        <div className="bg"></div>
        </>

    )
}


export default Login; 