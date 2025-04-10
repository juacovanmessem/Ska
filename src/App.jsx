import Header from "./components/Header.jsx"
import Frase from "./components/Frase.jsx"
import Destacados from "./components/Destacados.jsx"
import SobreMi from "./components/SobreMi.jsx"
import Footer from "./components/Footer.jsx"
import Contacto from "./components/Contacto.jsx"
import Carrusel from "./components/Carrusel.jsx"
import Proyectos from "./components/Proyectos.jsx"
import './App.css'

function App() {

  return (
    <>
      <div className="tamaño">
      <Header/>
      </div>
      <Frase/>
      <Destacados/>
      <Frase/>
      <SobreMi/>
      <Footer/>
      <Contacto/>
      <Carrusel/>
      <Proyectos/>
    </>
  )
}

export default App
