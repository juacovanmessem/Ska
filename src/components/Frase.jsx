import React from 'react'
import '../styles/Frase.css'
import Card from 'react-bootstrap/Card';

function Frase({ titulo, frase, autor }) {
  return (
    <>
      <div className='fondobase'>
        <div className='contenedorfrase'>
        
          <div>{titulo}</div>
          <div>{frase}</div>
          <div>{autor}</div>
        </div>
      </div>
    </>
  )
}

export default Frase