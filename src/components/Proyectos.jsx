import React, { useEffect, useState } from 'react';
import '../styles/Proyectos.css';
import database from '../db/database.json';

function Proyectos() {
  const [proyectos, setProyectos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const datos = database.proyectos || [];
    setProyectos(datos);
    setLoading(false);
  }, []);

  const getRandomSizeClass = () => {
    const sizes = ['brick-small', 'brick-medium', 'brick-large'];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  return (
    <>
      <h2>Todos los proyectos</h2>
      <div className='container'>
        {loading && <div className="masonry-preloader">Cargando...</div>}
        <div className="masonry">
          {proyectos.map(proyecto =>
            [proyecto.foto1, proyecto.foto2, proyecto.foto3].map((foto, idx) => {
              if (!foto) return null;
              const sizeClass = getRandomSizeClass();
              return (
                <figure className={`masonry-brick ${sizeClass}`} key={`${proyecto.id}-${idx}`}>
                  <img
                    src={foto}
                    alt={`${proyecto.nombre} imagen ${idx + 1}`}
                    className="masonry-img"
                    decoding="async"
                    loading="lazy"
                  />
                </figure>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default Proyectos;
