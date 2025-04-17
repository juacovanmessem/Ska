import React from 'react'
import '../styles/Miniheader.css'
import { useEffect, useState } from 'react';
import logo from "../assets/images/misc/logo-removebg-preview.png"

const Miniheader = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.sticky-top');
      if (section) {
        const { top } = section.getBoundingClientRect();
        setIsSticky(top === 0); // Se activa solo cuando el elemento realmente está pegajoso
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section >
      <div className='miniheader'>
      {/* className="miniheader d-flex justify-content-center" style={{visibility: isSticky ? 'visible' : 'hidden', opacity: isSticky ? 1 : 0, transition: 'opacity 0.3s ease-in-out',}} ||||||||||esto va en section: className="sticky-top"|||||||| */}
        <div className='contenido-miniheader fuente-letra2'>
          <a href="/" className='botones-miniheader btn from-center'>SOBRE SKA</a>
          <a href="/" className='botones-miniheader btn from-center'>DESTACADOS</a>
          <img src={logo} alt="" className='logominiheader' />
          <a href="/proyectos" className='botones-miniheader btn from-center'>PROYECTO </a>
          <a href="/contacto" className='botones-miniheader btn from-center'>CONTACTO</a>
        </div>
        
      </div>
    </section>
  );
};

export default Miniheader;