import "./ContactSection.css";
import  contact from "../../../assets/contact.png";
import Image from "../../atoms/Image/Image";
import BaseForm from "../BaseForm/BaseForm";
import type { Field } from "../BaseForm/BaseForm";

function ContactSection () {

    const fields: Field[] = [
        {
            name: "name", 
            label : "Name", 
            type: "text", 
            placeholder : "Enter your Name"
        },
        {
            name: "email", 
            label : "Email", 
            type: "email", 
            placeholder : "Enter your Email"
        },
        {
            name: "message", 
            label : "message", 
            type: "textarea", 
            placeholder : "Enter your message.."
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
                <h2>Contact</h2>
                <hr className="contact-separador"/>
                    <div className="Form-container-contact">
                        <BaseForm fields={fields} onSubmit={handleContactSubmit} buttonText="Send Message" />
                    </div>
            </div>
        </section>


    )
    
   

    
    
} 

export default ContactSection;


