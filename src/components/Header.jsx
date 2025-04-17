import React from 'react'
import '../styles/Header.css'
import logo from "../assets/images/misc/logo-removebg-preview.png"

function Header() {
  return (
    <>
      <div className='containerfondo'>
        <div className='containerheader'>
          <div className='headerfototitulo fuente-titulo hero-logo'>
            <img className='img-fluid logo' src={logo} alt="no hay"/>
          </div>
          <div className='botones row g-0 d-flex hero-title fuente-letra2 flex-wrap'>
            <div className="col-12 col-md-4 texto1">
              <a className="nav-link item1 item" href="#sobreSka">SOBRE SKA</a>
            </div>
            <div className="col-md-2 none"></div>
            <div className="col-md-2 none"></div>
            <div className="col-12 col-md-4 texto2">
              <a className="nav-link item3 item" href="/proyectos">PROYECTOS</a>
              
            </div>
            <div className="col-md-3 none"></div>
            <div className="col-12 col-md-3 text-center">
              <a className="nav-link item2 item" href="#destacados">DESTACADOS</a>
            </div>
            <div className="col-12 col-md-3 text-center">
              <a className="nav-link item4 item" href="/contacto">CONTACTO</a>
            </div>
            <div className="col-md-3 none"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header