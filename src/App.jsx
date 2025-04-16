import Header from "./components/Header.jsx"
import Frase from "./components/Frase.jsx"
import Destacados from "./components/Destacados.jsx"
import SobreMi from "./components/SobreMi.jsx"
import Footer from "./components/Footer.jsx"
import Contacto from "./components/Contacto.jsx"
import Proyectos from "./components/Proyectos.jsx"
import './App.css'

function App() {

  return (
    <>
      <div className="tamaño">
      <Header/>
      </div>
      <Frase titulo="hola" frase="Pensar en arquitectura es esencialmente pensar un concepto, es decir, una idea rectora, signifi-cativa, frascendente y simbólica. Pero esa idea parte de una necesidad, una necesidad que no se limita a lo funcional, ni siquiera a lo simbólico o social, y por sobre todo, esa idea no surge uni-camente del arquitecto. Así concebida, la arquitectura es una búsqueda, una búsqueda conjun-ta, y el arquitecto es un guía, el guía responsable de llegar al lugar deseado" autor="Robert Venturi"/> 
      
      <Destacados/>
      <Frase titulo="hola" frase=" espacio no tiene sentido sin luz. Un edificio habla a través del silencio de la percepción orquestada por la luz." autor="Steven Holl"/>
      
      <SobreMi/>
      <Footer/>
      <Contacto/>
      <Proyectos/>
    </>
  )
}

export default App
