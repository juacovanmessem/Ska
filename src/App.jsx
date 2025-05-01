import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ContactoPage from "./pages/ContactoP"
import ProyectosPage from "./pages/ProyectosP"
import "./App.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
      </Routes>
    </>
  )
}

export default App

