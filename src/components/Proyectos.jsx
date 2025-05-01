import React, { useEffect, useState } from 'react';
import '../styles/Proyectos.css';
import database from '../db/database.json';
import ModalProy from '../components/ModalProy'; 
import Footer from "../components/Footer"
import Miniheader from "../components/Miniheader"

function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProyectos(database.proyectos || []);
    setLoading(false);
  }, []);

  const getRandomSizeClass = () => {
    const sizes = ['brick-small', 'brick-medium', 'brick-large'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <>
      <div className='proy-tittle'>
        <Miniheader/>
        <h2>Todos los proyectos</h2>
      </div>
      <div className='container my-5'>
        {loading && <div className="masonry-preloader">Cargando...</div>}
        <div className="masonry">
          {proyectos.map((proyecto, idx) => {
            if (!proyecto.foto1) return null;
            const sizeClass = getRandomSizeClass();
            return (
              <figure className={`masonry-brick ${sizeClass}`} key={proyecto.id || idx}>
                <ModalProy proyecto={proyecto} idx={idx} />
              </figure>
            );
          })}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Proyectos;
