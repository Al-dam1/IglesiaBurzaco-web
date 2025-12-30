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
    title:"Contacto",
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

        {/* Botón hamburguesa */}
        <input type="checkbox" id="myInput" />
        <label htmlFor="myInput" className="hamburger">
          <span className="bar top"></span>
          <span className="bar middle"></span>
          <span className="bar bottom"></span>
        </label>

        {/* Aside menu */}
        <aside>
          <div className="aside-section aside-left">
            <div className="aside-content">
              <p>Some text that will make you click the CTA</p>
              <button className="button">CTA</button>
            </div>
          </div>
          <div className="aside-section aside-right">
            <ul className="aside-list">
              <li><a href="/" className="aside-anchor">Inicio</a></li>
              <li><a href="/" className="aside-anchor">Nosotros</a></li>
              <li><a href="/" className="aside-anchor">Contacto</a></li>
              <li><a href="/" className="aside-anchor">Testimonios</a></li>
            </ul>
          </div>
        </aside>
      </nav>
    </>
  );
};




export default Navbar;
