import React from 'react'
import '../styles/Header.css'
import logo from "../assets/images/misc/logo.png"
import fondo from "../assets/images/misc/fondo1.jpg"

function Header() {
  return (
    <>
      <div className='containerheader' >
        <div className='headerfototitulo fuente-titulo'>
          <img className='img-fluid' src={logo} alt="no hay"/>
        </div>

        <div className='botones row g-0 d-flex justify-content-evenly'>
          <div class="col-3">
            <a class="nav-link item1" aria-current="page" href="#">Home</a>
          </div>
          <div class="col-3 display-sm-none"></div>
          <div class="col-3 display-sm-none"></div>
          <div class="col-3">
            <a class="nav-link item2" href="#">Features</a>
          </div>
          <div class="col-3 display-sm-none"></div>
          <div class="col-3">
            <a class="nav-link item3" href="#">Pricing</a>
          </div>
          <div class="col-3">
            <a class="nav-link item4" href="#">Pricing1</a>
          </div>
          <div class="col-3 display-sm-none"></div>
        </div> 
        
        <div className='radio'>g</div>
      </div>
    </>
  )
}

export default Header