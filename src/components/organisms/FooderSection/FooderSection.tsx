import TestimonialCard from "../../molecules/TestimonialCard/TestimonialCard";
import RoyalCanine from "../../../assets/Food/RoyalCanine.jpg"
import ProPlan from "../../../assets/Food/ProPlan.jpg";
import NutraNuggets from "../../../assets/Food/NutraNuggets.jpg";
import "./FooderSection.css";
import { useTranslation } from "react-i18next";
function FooderSection() {
  const { t } = useTranslation(["home"]);

  const royalCaninePrice = t("food.RoyalCanin.priceMessage",{
    price: t("food.RoyalCanin.price"),
  });

  return (
    <section className="fooder-container">
        <h2>{t('food.title')}</h2>
        <div className="fooder-cards-container">
          <TestimonialCard
            name={t('food.RoyalCanin.name')}
            comment={royalCaninePrice}
            avatar={RoyalCanine}
            rating={4}
           
          />
          <TestimonialCard
            name={t('food.Proplan.name')}
            comment={royalCaninePrice}
            avatar={ProPlan}
            rating={3}

          />
          <TestimonialCard
            name={t('food.NutraNuggets.name')}
            comment={royalCaninePrice}
            avatar={NutraNuggets}
            rating={4}

          />
        </div>
        

    </section>
  );
}

export default FooderSection;