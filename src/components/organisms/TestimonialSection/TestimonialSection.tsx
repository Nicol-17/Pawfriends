import TestimonialCard from "../../molecules/TestimonialCard/TestimonialCard";
import "./TestimonialSection.css"
import person1 from "../../../assets/Testimonial/person1.jpg"
import person2 from "../../../assets/Testimonial/person2.jpg"
import person3 from "../../../assets/Testimonial/person3.jpg"

function TestimonialSection() {
    return (
        <section className="Testimonial-container">
            <h2>TESTIMONIALS</h2>
            <div style={{ display: "flex", gap: "5rem", justifyContent: "space-evenly" }}>
                <TestimonialCard
                    name="Luna"
                    comment="This is app amazing!"
                    avatar={person1}
                    rating={5}

                />

                <TestimonialCard
                    name="Leila"
                    comment="This is app amazing!"
                    avatar={person2}

                />

                <TestimonialCard
                    name="Sara"
                    comment="This is app amazing!"
                    avatar={person3}
                    rating={4}

                />


            </div>

        </section>
    )


}
export default TestimonialSection;