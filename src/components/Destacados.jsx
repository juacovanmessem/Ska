import React, { useState, useEffect } from "react";
import "../styles/Destacados.css";
import database from "../db/database.json"; // Tu archivo JSON

function Destacados() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    if (Array.isArray(database.proyectos)) {
      setProyectos(database.proyectos);
    }
  }, []);

  return (
    <>
      <div className="my-4 w-100 bg-cremita">
        <h2 className="mb-4">Proyectos destacados</h2>
        <div className="accordion accordion-flush" id="accordionProyectos">
          {proyectos
            .filter((proy) => proy.destacar)
            .map((proy, index) => (
              console.log(index),
              <div className="accordion-item" key={proy.id}>
                <h2 className="accordion-header" id={`heading${proy.id}`}>
                  <button
                    className="accordion-button collapsed justify-content-center px-5"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${proy.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${proy.id}`}
                    id={`bg${index+1}`}
                  >
                    <span className="px-5">
                      {proy.nombre} – {proy.año}
                    </span>
                  </button>
                </h2>
                <div
                  id={`collapse${proy.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${proy.id}`}
                  data-bs-parent="#accordionProyectos"
                >
                <div className="accordion-body p-5" id={`bg${index+1}`}>
                    <div>
                      <p><strong>Titulo:</strong> {proy.nombre || "Sin resumen"}</p>
                      <p><strong>Estilo:</strong> {proy.estilo || "Sin resumen"}</p>
                      <p><strong>Resumen:</strong> {proy.resumen || "Sin resumen"}</p>
                      <p><strong>Descripción:</strong> {proy.descripcion || "Sin descripción"}</p>
                    </div>
                    <div>
                      {[proy.foto1, proy.foto2, proy.foto3].map((foto, i) =>
                        foto ? (
                          <img
                            key={i}
                            src={foto}
                            alt={`Foto ${i + 1} del proyecto ${proy.nombre}`}
                            className="img-dest"
                          />
                        ) : null
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Destacados;

