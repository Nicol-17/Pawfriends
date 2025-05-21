import "./home.css"
import NavItem from "../../components/organisms/NavItem/NavItem";
import HeroText from "../../components/molecules/HeroText/HeroText";
import UsText from "../../components/molecules/UsText/UsText";
import Hojas from "../../assets/Hojas.png"
import TestimonialSection from "../../components/organisms/TestimonialSection/TestimonialSection";
import Image from "../../components/atoms/Image/Image";
import ContactSection from "../../components/organisms/ContactSection/ContactSection";

const Home = () => {
    return (
        <>
            <NavItem />


            <main className="section">
                <HeroText />
            </main>
            <div className="separator">
                <Image src={Hojas} alt="Hojas"  className="Hojas" aria-hidden="true" ></Image>
            </div>

            <section id="us" className="section">
                <UsText />
            </section>

            <section id="testimonials" className="testimonials">
                <TestimonialSection />
            </section>

            <section id="contact" className="contact">
                <ContactSection/>

            </section>
        </>
    )

}

export default Home; 