import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavbarStyles.css";

const Navbar = () => {
  // État local pour gérer l'affichage du menu mobile
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Fonction pour basculer l'état du menu mobile et le fermer après avoir cliqué sur un élément
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  // Fonction pour fermer le menu mobile après avoir cliqué sur un élément du menu
  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div className="navbar">
      <header className="header flex items-center justify-between p-4">
        <NavLink
          to="/"
          className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
        >
          <p className="blue-gradient_text">ME</p>
        </NavLink>
        {/* Ajoutez la fonction onClick pour basculer l'état du menu mobile */}
        <div className="md:hidden" onClick={toggleMobileMenu}>
          <button className="menu-icon">&#9776;</button>
        </div>
        {/* Utilisez la classe show-mobile pour afficher/masquer le menu mobile */}
        <nav
          className={`md:flex text-lg gap-7 font-medium ${
            showMobileMenu ? "show-mobile" : ""
          }`}
        >
          {/* <NavLink
            to="/about"
            activeClassName="text-blue-500"
            className="text-black"
            onClick={closeMobileMenu}
          >
            À propos
          </NavLink> */}
          <NavLink
            to="/projects"
            activeClassName="text-blue-500"
            className="text-black"
            onClick={closeMobileMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-blue-500"
            className="text-black"
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
