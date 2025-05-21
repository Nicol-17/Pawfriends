import "./NavItem.css"
import Button from "../../atoms/Button/Button";
import Logo from "../../../assets/logo.png";

function NavItem () {
    return(
        <div className="Nav-container">
        <nav className="main-wrapper Nav-menu">
                <img src={Logo} alt="Pawfriends logo" className="Nav-logo" />

                <ul className="Nav-list">
                    <li><a href="#us" className="Nav-links">US</a></li>
                    <li><a href="#testimonials" className="Nav-links">TESTIMONIALS</a></li>
                    <li><a href="#contact" className="Nav-links">CONTACT US</a></li>
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