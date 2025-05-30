import TestimonialCard from "../../molecules/TestimonialCard/TestimonialCard";
import "./TestimonialSection.css"
import person1 from "../../../assets/Testimonial/person1.jpg"
import person2 from "../../../assets/Testimonial/person2.jpg"
import person3 from "../../../assets/Testimonial/person3.jpg"
import { useTranslation } from "react-i18next";

function TestimonialSection() {
    const { t } = useTranslation(["home"]);

    return (
        <section className="Testimonial-container">
            <h2>{t('testimonials.title')}</h2>
            <div className="Testimonial-cards-container">
                <TestimonialCard
                    name="Luna"
                    comment={t('testimonials.comment1')}
                    avatar={person1}
                    rating={5}

                />

                <TestimonialCard
                    name="Leila"
                    comment={t('testimonials.comment2')}
                    avatar={person2}

                />

                <TestimonialCard
                    name="Sara"
                    comment={t('testimonials.comment3')}
                    avatar={person3}
                    rating={4}

                />

                


            </div>

        </section>
    )


}
export default TestimonialSection;