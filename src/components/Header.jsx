import React from 'react'
import '../styles/Header.css'
import logo from "../assets/images/misc/logo-removebg-preview.png"
import prueba1 from "../assets/images/misc/pruebaimagen1.jpg"
import fondomarmol from "../assets/images/misc/texturamarmol.jpg"

function Header() {
  return (
    <>
      <div className='containerfondo'>
        <div className='containerheader'>
          <div className='headerfototitulo fuente-titulo hero-logo'>
            <img className='img-fluid logo' src={logo} alt="no hay"/>
          </div>
          <div className='botones row g-0 d-flex justify-content-evenly hero-title fuente-letra2'>
            <div class="col-4 text-end">
              <a class="nav-link item1" aria-current="page" href="#">INICIO</a>
            </div>
            <div class="col-2 display-sm-none"></div>
            <div class="col-2 display-sm-none"></div>
            <div class="col-4 text-start">
              <a class="nav-link item2" href="#">DESTACADOS</a>
            </div>
            <div class="col-3 display-sm-none"></div>
            <div class="col-3 text-center">
              <a class="nav-link item3" href="#">PROYECTOS</a>
            </div>
            <div class="col-3 text-center">
              <a class="nav-link item4" href="#">CONTACTO</a>
            </div>
            <div class="col-3 display-sm-none"></div>
          </div>
        </div>
      </div>
      <div className='linea'></div>
    </>
  )
}

export default Header