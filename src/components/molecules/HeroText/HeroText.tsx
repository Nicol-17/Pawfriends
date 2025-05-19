import Button from "../../atoms/Button/Button";
import { Link } from 'react-router-dom';
import Rama from '../../../assets/Rama.png'
import Dog from '../../../assets/modelDog.png'
import "./HeroText.css";


function HeroText (){
    return <section className='hero-section section-full'>
        <img src={Rama} alt="Rama" inert className="Nav-rama" />
        <img src={Dog} alt="Dog" inert className="Dog" />
        <figure className='Shape'><Shape /></figure>

        <div className="main-wrapper">
            <div className="text-primary">
                <h1 className="text-principle chewy">
                    <span>A COMMUNITY FOR</span> 
                    <span className='owners'>HOMEOWNERS <small className='puppies'>SICK PUPPIES</small></span>
                </h1>
                <div >
                </div>

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
        </div>
    </section>
}
export default HeroText;


function Shape() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 235.86">
        <g data-name="Capa 2">
            <path
                fill='currentColor'
                d="M208.82,8.26c24.27,6.68,51.36,15.65,51.18,34.29-.18,18.47-27.44,46.61-30.6,72.81s17.94,50.65,14.77,63.49c-3,12.83-30.42,14.42-51.53,12.66s-36-6.69-57.85,5.1c-21.63,11.78-50.3,40.45-66.3,39.21-16.18-1-19.7-32-33.24-56.8S-1.51,135.76.08,118c1.58-17.59,28-34.47,47.83-48A580.2,580.2,0,0,0,95.75,33.58C110.17,21.27,126,7,144.46,2.11,163.1-2.82,184.55,1.58,208.82,8.26Z"/>
        </g>
    </svg>
}