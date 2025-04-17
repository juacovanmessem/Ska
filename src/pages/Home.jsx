import Header from "../components/Header.jsx"
import Frase from "../components/Frase.jsx"
import Destacados from "../components/Destacados.jsx"
import SobreMi from "../components/SobreMi.jsx"
import Footer from "../components/Footer.jsx"

function Home() {
  return (
    <>
      <div className="tamaño">
        <Header />
      </div>
      <Frase
        titulo="hola"
        frase="Pensar en arquitectura es, esencialmente, pensar un concepto; es decir, una idea rectora, significativa, trascendente y simbólica. Pero esa idea parte de una necesidad: una necesidad que no se limita a lo funcional, ni siquiera a lo simbólico o social. Y, por sobre todo, esa idea no surge únicamente del arquitecto. Así concebida, la arquitectura es una búsqueda, una búsqueda conjunta, y el arquitecto es un guía: el guía responsable de llegar al lugar deseado."
        autor="Robert Venturi"
      />
      <div id="destacados">
        <Destacados/>
      </div>
      <Frase
        titulo="hola"
        frase="Espacio no tiene sentido sin luz. Un edificio habla a través del silencio de la percepción orquestada por la luz."
        autor="Steven Holl"
      />
      <div id="sobreSka">
        <SobreMi />
      </div>
      <Footer />
    </>
  )
}

export default Home
