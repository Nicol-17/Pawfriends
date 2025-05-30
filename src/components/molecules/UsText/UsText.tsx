import "./UsText.css"
import Us from "../../../assets/us.png"
import Image from "../../atoms/Image/Image";
import { useTranslation } from "react-i18next";

function UsText() {
  const { t } = useTranslation(["home"]);
  return (
    <section className="mission-container">
      <Image src={Us} alt="Us" className="mission-img"></Image>

      <div className="mission-text-container">
        <h2 className="mission-title">{t('us.title')}</h2>
         <p>
          {t("us.paragraph1")}
            
        </p>

        <p>
           {t("us.paragraph2")}
           
        </p>
      </div>
    </section>
  );
}
export default UsText;