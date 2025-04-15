import React from 'react'
import '../styles/SobreMi.css'
import persona from "../assets/images/misc/persona.jpeg"

function SobreMi() {
  return (
    <>
 
      <section className='sobremipadre'>
        <div className='w-100 d-flex row g-0 px-5'>
          <div className='col-1'></div>
          <div className='titulosobremi fuente-titulo col-lg-3 col-md-6 col-10'> 
            <span>Ajelandro Smalkerla</span>
           
          </div>
        </div>
        <div className='fotodescrp'>
          <div className='d-flex justify-content-center'> 
            <img className='foto' src={persona} alt=""/> 
          </div>

          <div className='descrp fuente-letra2'>
          <span className="corner-top-right-horizontal"></span>
          <span className="corner-top-right-vertical"></span>

            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga perferendis sapiente officia necessitatibus et non. Nam quae neque modi illum iusto! Totam, soluta nemo odio similique quod eligendi, itaque consectetur, tempore rerum deserunt quo suscipit eaque nobis est error. Ipsam quas at doloribus maxime error nisi odit, vero dicta magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque consectetur et exercitationem natus, odio eligendi fugit deleniti quis vitae ipsa repudiandae doloribus recusandae qui autem suscipit animi asperiores officiis adipisci totam sit iure, nam quas? A modi, perspiciatis alias corporis, atque distinctio doloribus eligendi dolore quo facere quos accusamus corrupti labore odit voluptatem animi quibusdam magnam facilis expedita! Vitae.</span>
          </div>
        </div>
        
        <div className='fotodescrp'>
          <div className='d-flex justify-content-center'> 
            <img className='foto' src={persona} alt="" /> 
          </div>

          <div className='descrp1 fuente-letra2'>
            <span className="corner-bottom-left-horizontal"></span>
            <span className="corner-bottom-left-vertical"></span>
            <span className="corner-bottom-right-horizontal"></span>
            <span className="corner-bottom-right-vertical"></span>
            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga perferendis sapiente officia necessitatibus et non. Nam quae neque modi illum iusto! Totam, soluta nemo odio similique quod eligendi, itaque consectetur, tempore rerum deserunt quo suscipit eaque nobis est error. Ipsam quas at doloribus maxime error nisi odit, vero dicta magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam doloremque consectetur et exercitationem natus, odio eligendi fugit deleniti quis vitae ipsa repudiandae doloribus recusandae qui autem suscipit animi asperiores officiis adipisci totam sit iure, nam quas? A modi, perspiciatis alias corporis, atque distinctio doloribus eligendi dolore quo facere quos accusamus corrupti labore odit voluptatem animi quibusdam magnam facilis expedita! Vitae.</span>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default SobreMi