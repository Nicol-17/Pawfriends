import "./NavItem.css";
import Logo from "../../../assets/logo.png";
import { useState } from "react";

interface NavItemProps {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="Nav-container">
      <nav className="main-wrapper Nav-menu">
        <img src={Logo} alt="Pawfriends logo" className="Nav-logo" />

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <ul
          className={`Nav-list ${menuOpen ? "open" : ""}`}
          onClick={(e) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.closest("li")) {
              closeMenu();
            }
          }}
        >
          {children}
        </ul>
      </nav>
    </div>
  );
}

export default NavItem;
