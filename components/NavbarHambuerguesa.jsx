import React, { useState } from "react";

const navbarlinks = [
  { id: 1, title: "Inicio", link: "/" },
  { id: 2, title: "Nosotros", link: "#" },
  { id: 3, title: "Contacto", link: "#" },
  { id: 4, title: "Testimonios", link: "#" },
];

const NavbarHambuerguesa = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar-container">
      {/* Botón abrir menú */}
      <img
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={toggleMenu}
        className="menu-button"
      />

      {/* Menú lateral */}
      <div className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
        {/* Botón cerrar */}
        <div className="close-container">
          <img
            src="/close.svg"
            alt="close menu"
            width={32}
            height={32}
            className="close-button"
            onClick={toggleMenu}
          />
        </div>

        {/* Links */}
        <ul className="nav-links">
          {navbarlinks.map((link) => (
            <li key={link.id}>
              <a href={link.link} className="nav-link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay negro */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default NavbarHambuerguesa;


