import React from "react";

const navbarlinks =[
  {
    id:1,
    title:"Inicio",
    link:"/"
  },
  {
    id:2,
    title:"Nosotros",
    link:"#"
  },
  {
    id:3,
    title:"Soporte",
    link:"#"
  },
  {
    id:4,
    title:"testimonios",
    link:"#"
  },
]
const navbarRedes =[
  {
    id:1,
    title:"intagram",
    link:"https://www.instagram.com/vidamuchomejor?igsh=MTk3bTlsMDZ4bW1ubw==",
    icono:"bi bi-instagram"
  },
  {
    id:2,
    title:"facebook",
    link:"https://www.facebook.com/profile.php?id=61581802213362",
    icono:"bi bi-facebook"
  }
]

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
  <div className="logo">
    <img src="img/logo.jpg" alt="Logo" />
  </div>

  <ul className="nav-links">
    {navbarlinks.map((link) => (
      <li key={link.id}>
        <a href={link.link}>{link.title}</a>
      </li>
    ))}
  </ul>

  {/* <ul className="nav-redes">
    {navbarRedes.map((link) => (
      <li key={link.id}>
        <a href={link.link}>
          <i className={link.icono}></i>
        </a>
      </li>
    ))}
  </ul> */}
</nav>

    </>
  );
};

export default Navbar;
