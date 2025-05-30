import "./ContactSection.css";
import  contact from "../../../assets/contact.png";
import Image from "../../atoms/Image/Image";
import BaseForm from "../BaseForm/BaseForm";
import type { Field } from "../BaseForm/BaseForm";
import { useTranslation } from "react-i18next";

function ContactSection () {
   const { t } = useTranslation(["home"]);

    const fields: Field[] = [
        {
            name: "name", 
            label : t("contact.fields.name.label"),
            type: "text", 
            placeholder : t("contact.fields.name.placeholder"),
        },
        {
            name: "email", 
            label :  t("contact.fields.email.label"), 
            type: "email", 
            placeholder : t("contact.fields.email.placeholder"), 
        },
        {
            name: "message", 
            label : t("contact.fields.message.label"), 
            type: "textarea", 
            placeholder : t("contact.fields.message.placeholder"),
        }
    ];

    const handleContactSubmit = (FormData: Record<string, string>) => {
        console.log("Form submitted:", FormData);
    } 

    return(
        <section className="Contact-container" aria-label="Section contact">
            <div className="Contact-img">
                <Image src={contact} alt="Contact" className="contact-img" />
            </div>

            <div className="contact-text">
                <h2>{t('contact.title')}</h2>
                <hr className="contact-separador"/>
                    <div className="Form-container-contact">
                        <BaseForm fields={fields} onSubmit={handleContactSubmit} buttonText={t('contact.button')} />
                    </div>
            </div>
        </section>


    )
    
   

    
    
} 

export default ContactSection;


