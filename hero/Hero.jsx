import React from 'react'

const Hero = () => {
  return (
    <div>
     <h2>Iglesia Universal Burzaco</h2>
    
     <video width={320} height={340} controls="controls" poster='/img/flyer_viernes.jpg' >
      <source src='/img/viernes.mp4'></source>
      EL NAVEGADOR NO SOPORTA LA ETIQUETA VIDEO
     </video>
    </div>
  )
}

export default Hero
