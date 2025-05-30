import "./NavItem.css"

import Logo from "../../../assets/logo.png";


function NavItem ({children}: {children: React.ReactNode}) {
    return(
        <div className="Nav-container">
        <nav className="main-wrapper Nav-menu">
                <img src={Logo} alt="Pawfriends logo" className="Nav-logo" />

                <ul className="Nav-list">
                    {children}
                </ul>
            </nav>
        </div>
    )
}

export default NavItem;