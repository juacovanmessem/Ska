import React from 'react'
import '../styles/Frase.css'
import Card from 'react-bootstrap/Card';
import imagen from "../assets/images/misc/hojarota5.png"

function Frase({ titulo, frase, autor }) {
  return (
    <>
      <section className='fondobase'>
       <div class="quote">
          <span class="left">❝</span>
          <blockquote className='fuente-letra2'>
            {frase}
          </blockquote>
          <small className='fuente-letra2'>{autor}</small>
          <span class="right">❞</span>
        </div>
      </section>
    </>
  )
}

export default Frase