import "./TestimonialCard.css"

type TestimonialCardProps = {
    name: string;
    comment: string;
    avatar: string;
    rating?: number;
    
};

function TestimonialCard ({name, comment, avatar, rating = 5} :TestimonialCardProps){
    return(
        <div className="testimonial-card">
            <img src={avatar} alt={`Photo of ${name}`} className="testimonial-avatar" />
            <h3>{name}</h3>
            <div className="testimonial-stars">
                <Start rating={rating} />
            </div>
            <p>{comment}</p>
        </div>

        
    )
}

export default TestimonialCard;


function Start({ rating = 5 } : { rating: number }) {
    return Array.from({length: 5}, (_, i) => (
        <span key={i} className={i < rating ? "star filled" : "star"}>
            ★
        </span>
    ))
}