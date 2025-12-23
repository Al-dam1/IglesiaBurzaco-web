import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../hero/Hero'
import AgendaSemanal from '../components/AgendaSemanal'
import Noticias from '../components/Noticias'
import Contacto from '../components/Contacto'
import Fju from '../components/Fju'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
        <Hero/>
      {/* <i className="bi bi-apple"></i> */}
      <Contacto/>
      <AgendaSemanal/>
      <Noticias/>
      <Fju/>
      <Footer/>
    </>
  )
}

export default App
