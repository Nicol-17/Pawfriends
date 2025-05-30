import TestimonialCard from "../../molecules/TestimonialCard/TestimonialCard";
import RoyalCanine from "../../../assets/Food/RoyalCanine.jpg"
import ProPlan from "../../../assets/Food/ProPlan.jpg";
import NutraNuggets from "../../../assets/Food/NutraNuggets.jpg";
import "./FooderSection.css";
import { useTranslation } from "react-i18next";
function FooderSection() {
  const { t } = useTranslation(["home"]);

  return (
    <section className="fooder-container">
        <h2>{t('food.title')}</h2>
        <div className="fooder-cards-container">
          <TestimonialCard
            name={t('food.RoyalCanin.name')}
            comment={t('food.RoyalCanin.price')}
            avatar={RoyalCanine}
            rating={4}
           
          />
          <TestimonialCard
            name={t('food.Proplan.name')}
            comment={t('food.Proplan.price')}
            avatar={ProPlan}
            rating={3}

          />
          <TestimonialCard
            name={t('food.NutraNuggets.name')}
            comment={t('food.NutraNuggets.price')}
            avatar={NutraNuggets}
            rating={4}

          />
        </div>
        

    </section>
  );
}

export default FooderSection;