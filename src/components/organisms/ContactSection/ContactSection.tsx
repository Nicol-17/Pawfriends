import "./ContactSection.css";
import  contact from "../../../assets/contact.png";
import Image from "../../atoms/Image/Image";

function ContactSection () {
    return (
        <section  className="Contact-container" aria-label="Section contact">
            <h2>Contact</h2>
            <hr />
            <Image src={contact} alt="Contact" className="contact-img" ></Image> 
            <div className="Form-container">
                

            </div>
        </section>
    )
} 

export default ContactSection;