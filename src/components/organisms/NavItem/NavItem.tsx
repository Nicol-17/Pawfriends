import "./NavItem.css"
import { Link } from 'react-router-dom';
import Button from "../../atoms/Button/Button";
import Logo from "../../../assets/logo-white.png";
import Rama from "../../../assets/Rama.png";
// import Model from "../../../assets/modelDog.png";

function NavItem () {
    return(
       <nav className="Nav-container">
            <img src={Logo} alt="Pawfriends logo" className="Nav-logo" />

            <ul className="Nav-list">
                <li><Link to="/" className="Nav-links">Nosotros</Link></li>
                <li><Link to="/contacto" className="Nav-links">Contáctanos</Link></li>
                <li>
                <Link to="/login" className="Nav-links">
                    <Button>Log In</Button>
                </Link>
                </li>
            </ul>

            <img src={Rama} alt="Rama" className="Nav-rama" />
            {/* <img src={Model} alt="Model " className="Model"/> */}
        </nav>


    )
}

export default NavItem;