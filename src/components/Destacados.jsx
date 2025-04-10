import React, { useState, useEffect } from "react";
import "../styles/Destacados.css";
import database from "../db/database.json"; // Tu archivo JSON

function Destacados() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    if (Array.isArray(database.proyectos)) {
      setProyectos(database.proyectos);
    } else {
      console.error("El JSON no contiene una clave 'proyectos' con un array.");
    }
    console.log(database.proyectos)
  }, []);

  return (
    <>
      <div className="container my-4">
        <h2 className="mb-4">Proyectos destacados</h2>
        <div className="accordion accordion-flush" id="accordionProyectos">
          {proyectos
            .filter((proy) => proy.destacar)
            .map((proy) => (
              <div className="accordion-item" key={proy.id}>
                <h2 className="accordion-header" id={`heading${proy.id}`}>
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${proy.id}`}
                    aria-expanded="false"
                    aria-controls={`collapse${proy.id}`}
                  >
                    {proy.nombre} – {proy.estilo} – {proy.año}
                  </button>
                </h2>
                <div
                  id={`collapse${proy.id}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`heading${proy.id}`}
                  data-bs-parent="#accordionProyectos"
                >
                  <div className="accordion-body">
                    <p><strong>Resumen:</strong> {proy.resumen || "Sin resumen"}</p>
                    <p><strong>Descripción:</strong> {proy.descripcion || "Sin descripción"}</p>

                    {/* Mostrar imágenes si existen */}
                    <div className="d-flex gap-3 flex-wrap">
                      {[proy.foto1, proy.foto2, proy.foto3].map((foto, i) =>
                        foto ? (
                          <img
                            key={i}
                            src={foto}
                            alt={`Foto ${i + 1} del proyecto ${proy.nombre}`}
                            style={{ width: "150px", height: "auto", objectFit: "cover", borderRadius: "8px" }}
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

