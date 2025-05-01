import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalProy({ proyecto}) {
  const { nombre, año, descripcion, foto1, foto2, foto3 } = proyecto;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow} className="p-0 border-0 w-100 h-100">
        <img
          src={`/imgs/${foto1}`}
          alt={`${nombre}`}
          className="masonry-img"
          decoding="async"
          loading="lazy"
        />
      </Button>


      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title className='fuente-titulo'>{nombre} ({año})</Modal.Title>
        </Modal.Header>
        <Modal.Body className='fuente-letra'>
          <div className="container">
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <p>{descripcion}</p>
              </div>
              <div className='col-12 col-md-6 d-flex flex-column flew-wrap gap-3'>
                {[foto1, foto2].filter(Boolean).map((foto, idx) => (
                  <div className="col">
                    <img
                      key={idx}
                      src={`/imgs/${foto}`}
                      alt={`${nombre} imagen ampliada ${idx + 1}`}
                      className="modal-img"
                      style={{ cursor: 'zoom-in', width: '100%', borderRadius: '0.5rem' }}
                      onClick={(e) => {
                        if (e.target.requestFullscreen) {
                          e.target.requestFullscreen();
                        } else if (e.target.webkitRequestFullscreen) {
                          e.target.webkitRequestFullscreen();
                        } else if (e.target.msRequestFullscreen) {
                          e.target.msRequestFullscreen();
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
              <div>
                {[foto3].filter(Boolean).map((foto, idx) => (
                  <div className="col mt-3">
                    <img
                      key={idx}
                      src={`/imgs/${foto}`}
                      alt={`${nombre} imagen ampliada ${idx + 1}`}
                      className="modal-img"
                      style={{ cursor: 'zoom-in', width: '100%', borderRadius: '0.5rem' }}
                      onClick={(e) => {
                        if (e.target.requestFullscreen) {
                          e.target.requestFullscreen();
                        } else if (e.target.webkitRequestFullscreen) {
                          e.target.webkitRequestFullscreen();
                        } else if (e.target.msRequestFullscreen) {
                          e.target.msRequestFullscreen();
                        }
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalProy;
