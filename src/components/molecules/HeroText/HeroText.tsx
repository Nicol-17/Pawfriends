import Button from "../../atoms/Button/Button";
import { Link } from 'react-router-dom';
import "./HeroText.css";


function HeroText (){
    return(
       <div className="text-primary">
            <div className="text-principle">
                <h1>A COMMUNITY FOR <br/> HOMEOWNERS</h1>
            </div>

            <p>SICK PUPPIES</p>

            <p id="paragraph-primary"> 
                A PUPPY IS NOT ALONE, <br/>
            </p>
            

            <p id="paragraph-secondary">
                AND NEITHER DO YOU
            </p>

            <Link to="/login" className="Nav-links">
                <Button>SIGN UP</Button>
            </Link>
        </div>

    )
}
export default HeroText;