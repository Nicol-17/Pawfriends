import "./home.css"
import NavItem from "../../components/organisms/NavItem/NavItem";
import HeroText from "../../components/molecules/HeroText/HeroText";
import UsText from "../../components/molecules/UsText/UsText";
import FooderSection from "../../components/organisms/FooderSection/FooderSection";

import TestimonialSection from "../../components/organisms/TestimonialSection/TestimonialSection";

import ContactSection from "../../components/organisms/ContactSection/ContactSection";
import Button from "../../components/atoms/Button/Button";
import LanguageSwitcher from "../../components/atoms/LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";


const Home = () => {

  const { t } = useTranslation(["home"]);
    return (
         <>
      <NavItem>
      <LanguageSwitcher/>
        <li>
          <a href="#us" className="Nav-links">
            {t('nav.us')}
          </a>
        </li>
        <li>
          <a href="#testimonials" className="Nav-links">
            {t('nav.testimonials')}
          </a>
        </li>
        <li >
          <a href="#food" className="Nav-links">
            {t('nav.food')}
          </a>
        </li>
        <li>
          <a href="#contact" className="Nav-links">
            {t('nav.contact')}
          </a>
        </li>
        <li>
          <Button type="link" destiny="/login" className="Nav-links">
            {t('nav.login')}
          </Button>
        </li>
      </NavItem>



      <section className="section header-top-spacing section-full home-hero-container">
        <HeroText />
      </section>

      <div className="header-top-spacing">
        <div className="separator"></div>
      </div>

      <section id="us" className="section section-haft header-top-spacing">
        <div className="header-top-spacing main-wrapper">
          <UsText />
        </div>
      </section>

      <div className="header-top-spacing">
        <div className="separator"></div>
      </div>


      <section
        id="testimonials"
        className="testimonials section-haft header-top-spacing"
      >
        <div className="header-top-spacing main-wrapper">
          <TestimonialSection />
        </div>
      </section>

      <div className="header-top-spacing">
        <div className="separator"></div>
      </div>


      <section
      id="food"
      className="section-haft header-top-spacing"
      >
        <div className="header-top-spacing main-wrapper">
          <FooderSection/>
        </div>
      </section>

      <div className="header-top-spacing">
        <div className="separator"></div>
      </div>

      <section id="contact" className="contact header-top-spacing">
        <ContactSection />
      </section>
    </>
    )

}

export default Home;
