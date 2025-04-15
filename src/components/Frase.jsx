import React from 'react'
import '../styles/Frase.css'
import Card from 'react-bootstrap/Card';
import imagen from "../assets/images/misc/hojarota5.png"

function Frase({ titulo, frase, autor }) {
  return (
    <>
      
      <section className='fondobase'>
        <div className='contenedorfrase'>
          {/* <div className='frase text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil ab ipsum et nostrum temporibus suscipit sunt eum! Facilis ab architecto quaerat corporis quas, ipsa minus pariatur repellendus asperiores molestias corrupti ipsum saepe o 
          </div> */}
          <img src={imagen} alt="hola" />
        </div>
      </section>
    </>
  )
}

export default Frase