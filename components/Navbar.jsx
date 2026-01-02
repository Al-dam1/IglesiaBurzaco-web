import React, { useState } from "react";
import NavbarHambuerguesa from "/components/NavbarHambuerguesa";
const navbarlinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    link: "#",
  },
  {
    id: 3,
    title: "Contacto",
    link: "#",
  },
  {
    id: 4,
    title: "testimonios",
    link: "#",
  },
];
const navbarRedes = [
  {
    id: 1,
    title: "intagram",
    link: "https://www.instagram.com/vidamuchomejor?igsh=MTk3bTlsMDZ4bW1ubw==",
    icono: "bi bi-instagram",
  },
  {
    id: 2,
    title: "facebook",
    link: "https://www.facebook.com/profile.php?id=61581802213362",
    icono: "bi bi-facebook",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () =>{ setIsOpen(!isOpen)};
  return (
    <>
     <nav className="navbar">
  <div className="logo">
    <img src="img/logo.jpg" alt="Logo" />
  </div>

  {/* Botón hamburguesa */}
  <button onClick={toggleMenu} className="hamburger-btn">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="hamburger-icon"
    >
      {isOpen ? (
        <>
          <path d="M18 6L6 18" />
          <path d="M6 6L18 18" />
        </>
      ) : (
        <>
          <path d="M4 6L20 6" />
          <path d="M4 12L20 12" />
          <path d="M4 18L20 18" />
        </>
      )}
    </svg>
  </button>

  {/* Links desktop */}
  <div className="nav-desktop">
    <ul className="nav-links">
      {navbarlinks.map((link) => (
        <li key={link.id}>
          <a href={link.link}>{link.title}</a>
        </li>
      ))}
    </ul>
  </div>
</nav>

    </>
  );
};

export default Navbar;
