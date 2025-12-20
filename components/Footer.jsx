import React from 'react'

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


const Footer = () => {
  return (
    <>
    
    <div className="redes">
       <p><small>derechos reservados &copy;</small></p>
       <h3>Seguinos en nuestras redes</h3>
       <ul className="nav-redes">
    {navbarRedes.map((link) => (
      <li key={link.id}>
        <a href={link.link}>
          <i className={link.icono}></i>
        </a>
      </li>
    ))}
  </ul> 
    </div>
    </>
  )
}

export default Footer
