import React from 'react'
import '../styles/Footer.css'

function Footer() {

  return (
    <>
      <div className="footer">
        <p className="text-center footer-top fuente-letra2"> 
          <a href="/" className="text link"> 
            <button>
              <div className="text link">
                <span>Volver</span>
                <span>al</span>
                <span>Inicio</span>
              </div>
              <div className="clone link">
                <span>Volver</span>
                <span>al</span>
                <span>Inicio</span>
              </div>
              <svg stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" width="20px">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path>
              </svg>
            </button>
          </a>
        </p>

        <div className="wrapper footer-descrp fuente-letra2">
         <a href="#" className="button">
            <div className="icon">
               <i className="bi bi-facebook"></i>
            </div>
            <span>Facebook</span>
         </a>
         <a href="#" className="button">
            <div className="icon">
               <i className="bi bi-linkedin"></i>
            </div>
            <span>Linkedin</span>
         </a>
         <a href="#" className="button">
            <div className="icon">
               <i className="bi bi-whatsapp"></i>
            </div>
            <span>Whatsapp</span>
         </a>
         <a href="#" className="button">
            <div className="icon">
               <i className="bi bi-instagram"></i>
            </div>
            <span>Instagram</span>
         </a>
         <a href="#" className="button">
            <div className="icon">
               <i className="bi bi-chat-square-dots-fill"></i>
            </div>
            <span>Contáctame</span>
         </a>
      </div>

        <div className='footer-bottom'>
          <div> <span className="fuente-letra2">SKA | Arquitectura. © 2025 Todos los derechos reservados.</span></div>
            <div className=''>
              <a href="" className='link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'>
              <i class="bi bi-github fuente-letra2 fs-3"></i>
              <span className='ps-2 fuente-letra2'>Devs</span>
              </a>
            </div>
            
          
        </div>
      </div>



    </>
  )
}

export default Footer