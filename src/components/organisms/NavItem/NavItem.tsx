import "./NavItem.css"
import { Link } from 'react-router-dom';
import Button from "../../atoms/Button/Button";
import Logo from "../../../assets/logo-white.png";

function NavItem () {
    return(
        <div className='Nav-container'>
        <nav className="main-wrapper Nav-menu">
                <img src={Logo} alt="Pawfriends logo" className="Nav-logo" />

                <ul className="Nav-list">
                    <li><Link to="/" className="Nav-links">Nosotros</Link></li>
                    <li><Link to="/contacto" className="Nav-links">Contáctanos</Link></li>
                    <li>
                        <Button type='link' destiny="/login" className="Nav-links">
                            Log In
                        </Button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavItem;