import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import validator from 'validator';
import Footer from "../components/Footer";
import Miniheader from "../components/Miniheader";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  const validateField = (name, value) => {
    switch (name) {
      case 'nombre':
        if (!value || !/^[a-zA-Z\s]+$/.test(value)) {
          return 'El nombre solo debe contener letras y espacios.';
        }
        break;
      case 'email':
        if (!value || !validator.isEmail(value)) {
          return 'Por favor, ingresa un correo electrónico válido.';
        }
        break;
      case 'telefono':
        if (!value || !/^[0-9]+$/.test(value) || value.length < 8 || value.length > 15) {
          return 'Por favor, ingresa un número de teléfono válido (8-15 dígitos).';
        }
        break;
      case 'mensaje':
        if (!value || value.trim().length < 10) {
          return 'Por favor, ingresa un mensaje de al menos 10 caracteres.';
        }
        break;
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, corrige los errores antes de enviar el formulario.',
        icon: 'error',
        confirmButtonText: 'Cerrar',
      });
      return;
    }

    emailjs
      .sendForm(
        'service_m8l5wko',
        'template_73pkxe9',
        formRef.current,
        'IFaGqdO1JadyLLx8k'
      )
      .then(() => {
        Swal.fire({
          title: 'Éxito',
          text: 'El correo se ha enviado con éxito. Nos pondremos en contacto pronto.',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          mensaje: '',
        });
        setErrors({});
      })
      .catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'Hubo un problema al enviar el correo. Por favor, intenta de nuevo más tarde.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      });
  };

  return (
    <>
      <Miniheader/>
      <h1 className='pt-5'>contacto</h1>
      <section className='d-flex row g-0 px-5'>
        <div className='p-5 col-12 col-md-6'>
          <h1>titulo</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate nam, qui beatae nemo in odit? Commodi minus repellendus veniam quia quas numquam natus, eveniet, facere eius ullam blanditiis consectetur. Similique, eos pariatur voluptas, architecto illo incidunt quibusdam ducimus sit, earum commodi nostrum maxime? Dignissimos, adipisci reprehenderit ipsa quas nulla voluptatum veritatis atque quam. Officia aliquid, molestiae libero unde ipsam et. Ullam itaque, et, doloremque aperiam iure molestias aut consequatur inventore similique exercitationem cupiditate neque obcaecati voluptatem tempora. Ex voluptates repellat neque, culpa placeat aspernatur quod deserunt quaerat, quidem nam, vel minima eos sint facere quas quibusdam ipsa eius veritatis officia!</span>
        </div>
        <div className='p-5 col-12 col-md-6'>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Nombre y Apellido</label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className={`form-input ${errors.nombre ? 'is-invalid' : ''}`}
                required
              />
              {errors.nombre && <span className="error-text">{errors.nombre}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'is-invalid' : ''}`}
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Teléfono/Celular</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className={`form-input ${errors.telefono ? 'is-invalid' : ''}`}
                required
              />
              {errors.telefono && <span className="error-text">{errors.telefono}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className={`form-input ${errors.mensaje ? 'is-invalid' : ''}`}
                required
                rows={4}
              />
              {errors.mensaje && <span className="error-text">{errors.mensaje}</span>}
            </div>

            <button type="submit" className="bttn-1">Enviar</button>
          </form>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Contacto;
