import Button from "../../atoms/Button/Button";
import Rama from "../../../assets/Rama.png";
import Dog from "../../../assets/modelDog.png";
import "./HeroText.css";
import RamaSecondary from "../../../assets/Rama-secondary.png";
import Image from "../../atoms/Image/Image";
import { useTranslation } from "react-i18next";

function HeroText() {
  const { t } = useTranslation(["home"]);

  return (
    <section className="hero-section">
      <Image
        src={RamaSecondary}
        alt="Rama"
        aria-hidden="true"
        className="Rama-secondary"
      ></Image>
      <Image
        src={Rama}
        alt="Rama"
        aria-hidden="true"
        className="Nav-rama"
      ></Image>

      <div className="hero-main-content">
        <Image src={Dog} alt="Dog" aria-hidden="true" className="Dog"></Image>
        <div className="main-wrapper full-column">
          <div className="text-primary">
            <h1 className="text-principle chewy">
              <span>{t('hero.titleLine1')}</span>
              <span className="owners">
                {t('hero.titleLine2')} <small className="puppies"> {t('hero.titleLine3')}</small>
              </span>
            </h1>
            <div></div>

            <p className="paragraph-primary">
              {t('hero.paragraph1')}<br />
            </p>

            <p className="paragraph-secondary"> {t('hero.paragraph2')}</p>

            <Button type="link" destiny="/signup" className="Nav-links">
              {t('hero.signup')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroText;


